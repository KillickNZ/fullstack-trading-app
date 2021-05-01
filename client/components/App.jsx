import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'

import { get30CoinsCap, get30CoinsPrc, get30CoinsRat, getStockData } from '../apis/mainApi'
import { prepareCardArray } from '../utils'
import Header from './Header'
import MajorColumn from './MajorColumn'
import ItemDisplay from './ItemDisplay'
import Widgets from './Widgets'
import { Helmet } from 'react-helmet'
import { loadedApiData } from '../actions/stockActions'
// import LoadingGif from './LoadingGif'
// import LoadingGif from '../styles/svgs/loading.svg'



function App(props) {
  const [data, setData] = useState(null)
  const [coinFilter, setCoinFilter] = useState(0)
  const [loggedin, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  const filterChanger = (num) => {
    setCoinFilter(num)
  }

  useEffect(() => {
    if (coinFilter === 0) {
      get30CoinsCap()
        .then(res => {
          props.dispatch(loadedApiData(true))
          return setData(prepareCardArray(res))
        })
        .catch((err) => {
          return console.error(err.message)
        })
        
    } else
    if (coinFilter === 1) {
      get30CoinsPrc()
        .then(res => {
          props.dispatch(loadedApiData(true))
          return setData(prepareCardArray(res))
        })
        .catch((err) => {
          console.error(err.message)
        })
    } else
    if (coinFilter === 2) {
      get30CoinsRat()
        .then(res => {
          props.dispatch(loadedApiData(true))
          
          return setData(prepareCardArray(res))
        })
        .catch((err) => {
          console.error(err.message)
        })
    }
    // props.dispatch(loadedApiData(true))
    // console.log(props);
  }, [coinFilter])

  const apploading = () => {
    return  <div className='loading-display'>
        <h3 id="loading">One moment...</h3>
      </div>
  
  }

  return (
    <div className="outerWrapper">
      <Helmet>
        <title>SGC</title>
      </Helmet>
      <Header setLoggedIn={setLoggedIn} user={user} setUser={setUser} />

    { 
    props.loadedApi ?
      <div className="wrapper">
        <div className='container'>
          <div className="content-container">
            {data && <ItemDisplay  filterChanger={filterChanger} data={data} />}
            {/* <SelectedDisplay activeCoin={activeCoin} /> */}
            <MajorColumn />
            <Widgets />
          </div>
        </div>
      </div> 
      : 
      apploading() }
    </div>
  )
}


const mapStateToProps = (globalState) => {
  return {
    activeItem: globalState.activeItem,
    loadedApi: globalState.loadedApi
  }
}

export default connect(mapStateToProps)(App)
