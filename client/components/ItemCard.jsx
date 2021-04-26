import React, { useState, useEffect } from 'react'

const currencyCard = (props) => {
  const [select, setSelect] = useState('')

  useEffect(() => {
    props.coin.id === props.activeCoin ? setSelect('currencyCard--selected') : setSelect('')
  }, [props.activeCoin])

  return (
    <div className={`currencyCard ${select}`} onClick={() => props.clickHandler(props.coin.id)}>
      <div className="currencyCard--container">
        <p className="currencyCard--title">{props.coin.name}</p>
        <p className="currencyCard--code">{props.coin.code}</p>
        <p className="currencyCard--info">${props.coin.price} NZD</p>
      </div>
      <div className="currencyCard--container">
        <div className="currencyCard--containerVert">
          <p className="currencyCard--code">Cap: ${props.coin.mCap}b NZD</p>
          <p className="currencyCard--info">{props.coin.oneDayChange}% change</p>
        </div>
        <img className="currencyCard--img" src={props.coin.img} />
      </div>

    </div>
  )
}

export default currencyCard