import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { setCurrentCryptyo, addToWatchList, removeFromWatchList } from '../actions/stockActions'
import { updateUserWatchlist } from '../apis/mainApi'

const currencyCard = (props) => {
  const [select, setSelect] = useState('')
  const [watchClicked, setWatchClicked] = useState(false)

  useEffect(() => {
    props.coin.id === props.activeCoin
      ? setSelect('currencyCard--selected')
      : setSelect('')
  }, [props.activeCoin])

  // function renderCryptos (props) {
  // <div className={`currencyCard ${select}`} onClick={() => props.clickHandler(props.coin.id)}>
  //   <div className="currencyCard--container">
  //     <p className="currencyCard--title">{props.coin.name}</p>
  //     <p className="currencyCard--code">{props.coin.code}</p>
  //     <p className="currencyCard--info">${props.coin.price} NZD</p>
  //   </div>
  //   <div className="currencyCard--container">
  //     <div className="currencyCard--containerVert">
  //       <p className="currencyCard--code">Cap: ${props.coin.mCap}b NZD</p>
  //       <p className="currencyCard--info">{props.coin.oneDayChange}% change</p>
  //     </div>
  //     <img className="currencyCard--img" src={props.coin.img} />
  //   </div>
  // </div>
  // }

  // console.log('Active crypto', props.activeCryptyo);
  // console.log('props.coin.id: ', props.coin.name);
  // console.log(props)

  useEffect(() => {
    props.loggedIn && updateUserWatchlist(props.watchList, props.activeUser)
  }, [props.watchList])

  const watchListOnClick = (e) => {
    e.preventDefault()
    setWatchClicked(!watchClicked)
    console.log('props.watchList', props.watchList)
    !watchClicked
      ? props.dispatch(addToWatchList(e.target.name))
      : props.dispatch(removeFromWatchList(e.target.name))
    // updateUserWatchlist(props.watchList, props.activeUser)
  }

  return (
    // <div className={`currencyCard ${select}`} onClick={() => props.clickHandler(props.coin.id)}>
    <div
      className={`currencyCard ${select}`}
      onClick={() => props.dispatch(setCurrentCryptyo(props.coin.name))}
    >
      <div className="currencyCard--container">
        <p className="currencyCard--title">{props.coin.name}</p>
        <p className="currencyCard--code">{props.coin.code}</p>
        <p className="currencyCard--info">${props.coin.price} NZD</p>
      </div>
      <div className="currencyCard--container">
        <div className="currencyCard--containerVert">
          <p className="currencyCard--code">Cap: ${props.coin.mCap}b NZD</p>
          <p className="currencyCard--info">
            {props.coin.oneDayChange}% change
          </p>
        </div>
        <div>
          {props.loggedIn && <button className={'button ' + 'watchlist-' + watchClicked} onClick={(e) => watchListOnClick(e)} name={props.coin.code}>watch</button>}
        </div>
        <img className="currencyCard--img" src={props.coin.img} />
      </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    category: globalState.category,
    activeCryptyo: globalState.activeCryptyo,
    watchList: globalState.watchList,
    activeUser: globalState.activeUser,
    loggedIn: globalState.loggedIn
  }
}

export default connect(mapStateToProps)(currencyCard)
