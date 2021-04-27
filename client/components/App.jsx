import { connect } from 'react-redux'

// import { fetchFruits } from '../actions'
import React, { useState, useEffect } from 'react'

import { get30CoinsCap, get30CoinsPrc, get30CoinsRat, getStockData } from '../apis/mainApi'
import { prepareCardArray } from '../utils'
import Header from './Header'
import MajorColumn from './MajorColumn'
import ItemDisplay from './ItemDisplay'
import Widgets from './Widgets'
import { Helmet } from 'react-helmet'


function App() {
  const [data, setData] = useState(null)
  const [coinFilter, setCoinFilter] = useState(0)
  const [loggedin, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [activeCoin, setActiveCoin] = useState('bitcoin')

  const clickHandler = (id) => {
    setActiveCoin(id)
  }

  const filterChanger = (num) => {
    setCoinFilter(num)
  }

  useEffect(() => {
    if (coinFilter === 0) {
      get30CoinsCap()
        .then(res => {
          setData(prepareCardArray(res))
          return null
        })
        .catch((err) => {
          console.error(err.message)
        })
    } else
    if (coinFilter === 1) {
      get30CoinsPrc()
        .then(res => {
          setData(prepareCardArray(res))
          return null
        })
        .catch((err) => {
          console.error(err.message)
        })
    } else
    if (coinFilter === 2) {
      get30CoinsRat()
        .then(res => {
          setData(prepareCardArray(res))
          return null
        })
        .catch((err) => {
          console.error(err.message)
        })
    }
  }, [coinFilter])

  return (
    <div className="outerWrapper">
      <Helmet>
        <title>SGC</title>
      </Helmet>
      <Header setLoggedIn={setLoggedIn} user={user} setUser={setUser} />
      <div className="wrapper">
        <div className='container'>
          <div className="content-container">
            {data && <ItemDisplay activeCoin={activeCoin} filterChanger={filterChanger} clickHandler={clickHandler} data={data} />}
            {/* <SelectedDisplay activeCoin={activeCoin} /> */}
            <MajorColumn activeCoin={activeCoin} />
            <Widgets />
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (globalState) => {
  return {
    activeItem: globalState.activeItem
  }
}

export default connect(mapStateToProps)(App)
