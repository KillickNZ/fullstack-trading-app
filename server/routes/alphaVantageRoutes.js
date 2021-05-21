// const { response } = require('express')
const express = require('express')
const request = require('superagent')
require('dotenv').config()

const router = express.Router()

const apiURL = 'https://alpha-vantage.p.rapidapi.com/query'

const AVKey = process.env.ALPHA_VANTAGE

router.get('/getStockTimeSeries/:symbol', (req, res) => {
  console.log('PARAMS', req.params.symbol)
  return request
    .get(apiURL)
    .set('x-rapidapi-key', AVKey)
    .set('x-rapidapi-host', 'alpha-vantage.p.rapidapi.com')
    .set('useQueryString', true)
    .query({
      // 'function': 'TIME_SERIES_MONTHLY_ADJUSTED',
      function: 'TIME_SERIES_INTRADAY',
      interval: '1min',
      datatype: 'json',
      symbol: req.params.symbol
    })
    .then((result) => {
      return res.json(result.body)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.get('/getStockOverView/:symbol', (req, res) => {
  console.log('PARAMS', req.params.symbol)
  return request
    .get(apiURL)
    .set('x-rapidapi-key', AVKey)
    .set('x-rapidapi-host', 'alpha-vantage.p.rapidapi.com')
    .set('useQueryString', true)
    .query({
      // 'function': 'TIME_SERIES_MONTHLY_ADJUSTED',
      function: 'OVERVIEW',
      datatype: 'json',
      symbol: req.params.symbol
    })
    .then((result) => {
      return res.json(result.body)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router
