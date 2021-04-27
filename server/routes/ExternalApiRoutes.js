const express = require('express')
const request = require('superagent')

const apiURL = 'https://api.coingecko.com/api/v3'
const router = express.Router()

// GET all coins
// router.get('/', (req, res) => {
// return request.get(`${apiURL}/coins/list`)
// .then(response => {
//   return res.json(response.body)
// })
// })

// GET top 30 coins by market cap
router.get('/top30cap', (req, res) => {
  return request
    .get(
      `${apiURL}/coins/markets?vs_currency=nzd&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d`
    )
    .then((response) => {
      return res.json(response.body)
    })
})

router.get('/top30prc', (req, res) => {
  return request
    .get(
      `${apiURL}/coins/markets?vs_currency=nzd&order=price_desc&per_page=30&page=1&sparkline=false&price_change_percentage=24h`
    )
    .then((response) => {
      return res.json(response.body)
    })
})

router.get('/top30rat', (req, res) => {
  return request
    .get(
      `${apiURL}/coins/markets?vs_currency=nzd&order=gecko_desc&per_page=30&page=1&sparkline=false&price_change_percentage=24h`
    )
    .then((response) => {
      return res.json(response.body)
    })
})

router.get('/getMarket/:id', (req, res) => {
  const id = req.params.id
  console.log('ID', id)
  // return request.get(`${apiURL}/coins/${id}/market_chart/range?vs_currency=NZD&from=1613431243&to=1618096843`)
  return request
    .get(
      `${apiURL}/coins/${id}/market_chart/range?vs_currency=NZD&from=1615418443&to=1615850443`
    )

    .then((response) => {
      const s = new Date(response.body.prices[0][0]).toLocaleDateString(
        'en-US'
      )

      const newArr = {
        dates: [
          response.body.prices.map((ele) => {
            return new Date(ele[0]).toLocaleDateString('en-US')
          })
        ],
        values: [
          response.body.prices.map((ele) => {
            return ele[1]
          })
        ]
      }
      return res.json(newArr)
    })
})

module.exports = router

