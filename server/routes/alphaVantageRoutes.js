const express = require('express')
const request = require('superagent')

const router = express.Router()

const apiURL = 'https://alpha-vantage.p.rapidapi.com/query'


  router.get('/getStock/:symbol', (req, res) =>{
      console.log('PARAMS', req.params.symbol)
    return request
      .get(apiURL)
      .set("x-rapidapi-key", "aff6a62ec6mshec275f761cc86f7p1aed85jsn0d75e9d526ab")
      .set("x-rapidapi-host", "alpha-vantage.p.rapidapi.com")
      .set("useQueryString", true)
      .query({
        "function": "TIME_SERIES_MONTHLY_ADJUSTED",
        "datatype": "json",
        "symbol": req.params.symbol
      })
      .then(res => {
        console.log(res)
        return res
      })
})

  module.exports = router