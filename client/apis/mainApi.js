import request from 'superagent'

// import unirest from 'unirest'
// const unirest = require('unirest')

const baseURL = '/api/v1/ExternalApiRoutes'

export const getAllCoins = () => {
  return request.get('/api/v1/ExternalApiRoutes').then((response) => response.body)
}

export const get30CoinsCap = () => {
  return request
    .get('/api/v1/ExternalApiRoutes/top30cap')
    .then((response) => response.body)
}

export const get30CoinsPrc = () => {
  return request
    .get('/api/v1/ExternalApiRoutes/top30prc')
    .then((response) => response.body)
}

export const get30CoinsRat = () => {
  return request
    .get('/api/v1/ExternalApiRoutes/top30rat')
    .then((response) => response.body)
}

export const getMarketData = (activeCoin) => {
  return request
    .get('/api/v1/ExternalApiRoutes/getMarket/' + activeCoin)
    .then((response) => response.body)
}

export function getUser (username, password) {
  console.log('hitting internal api', username, password)
  return (
    request
      .get('/api/v1/dbRoutes/' + username + '/' + password)
      // .send({username, password})
      .then((res) => {
        console.log('API res.body ' + res.body)
        return res.body
      })
  )
}

// =========== Alpha Vantage calls ============= //

export const getStockData = (stockSymbol) => {
  return request
    .get('/api/v1/alphaVantageRoutes/getStockTimeSeries/'+stockSymbol)
    .then((response) => {
      return response.body
    })
}

export const getStockOverview = (stockSymbol) => {
  return request
    .get('/api/v1/alphaVantageRoutes/getStockOverView/'+stockSymbol)
    .then((response) => {
      console.log(response.body)
      return response.body
    })
}
