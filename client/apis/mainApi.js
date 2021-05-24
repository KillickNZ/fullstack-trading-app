import request from 'superagent'

const baseURL = '/api/v1/ExternalApiRoutes'

export const getAllCoins = () => {
  return request.get(baseURL).then((response) => response.body)
}

export const get30CoinsCap = () => {
  return request
    .get(baseURL + '/top30cap')
    .then((response) => response.body)
}

export const get30CoinsPrc = () => {
  return request
    .get(baseURL + '/top30prc')
    .then((response) => response.body)
}

export const get30CoinsRat = () => {
  return request
    .get(baseURL + '/top30rat')
    .then((response) => response.body)
}

export const getMarketData = (activeCoin) => {
  return request
    .get(baseURL + '/getMarket/' + activeCoin)
    .then((response) => response.body)
}

// =========== DB route calls ============= //

export function getUsers (username, password) {
  // console.log('hitting internal api', username, password)
  // console.log('/api/v1/dbRoutes/' + username + '/' + password)
  // return (
  //   request
  //     .get('/api/v1/dbRoutes/' + username + '/' + password)
  //     // .send({username, password})
  //     .then((res) => {
  //       console.log('API res.body ', res.body)
  //       return res.body
  //     })
  // )
}

// export function deleteUser (username, password) {
//   console.log('hitting internal api', username, password)
//   console.log('/api/v1/dbRoutes/' + username + '/' + password)
//   return (
//     request
//       .get('/api/v1/dbRoutes/' + username + '/' + password)
//       // .send({username, password})
//       .then((res) => {
//         console.log('API res.body ', res.body)
//         return res.body
//       })
//   )
// }

export function getUserWatchlist (username, password) {
  console.log('hitting internal api', username, password)
  console.log('/api/v1/dbRoutes/watchlist/' + username)
  return (
    request
      .get('/api/v1/dbRoutes/watchlist/' + username)
      // .send({username, password})
      .then((res) => {
        console.log('API res.body ', res.body)
        return res.body
      })
  )
}

export function updateUserWatchlist (watchlist, user) {
  console.log('hitting internal api', watchlist)
  console.log('/api/v1/dbRoutes/watchlist/' + user.username)
  return (
    request
      .post('/api/v1/dbRoutes/watchlist')
      .send({ watchlist: watchlist, username: user.username })
      .then((res) => {
        console.log('API res.body ', res.body)
        return res.body
      })
      .catch((err) => {
        throw err
      })
  )
}

// =========== Alpha Vantage calls ============= //

export const getStockData = (stockSymbol) => {
  return request
    .get('/api/v1/alphaVantageRoutes/getStockTimeSeries/' + stockSymbol)
    .then((response) => {
      return response.body
    })
}

export const getStockOverview = (stockSymbol) => {
  return request
    .get('/api/v1/alphaVantageRoutes/getStockOverView/' + stockSymbol)
    .then((response) => {
      console.log(response.body)
      return response.body
    })
}
