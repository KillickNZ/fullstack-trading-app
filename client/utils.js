const prepareCardData = (obj) => {
  return {
    name: obj.name,
    code: obj.symbol,
    img: obj.image,
    mCap: (obj.market_cap / 1000000000).toFixed(2),
    id: obj.id,
    price: obj.current_price.toFixed(2),
    oneDayChange: obj.price_change_percentage_24h.toFixed(2)
  }
}

const prepareCardArray = (arr) => {
  return arr.map((coin) => {
    return prepareCardData(coin)
  })
}

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

const getMonths = (month) => {
  return months.indexOf(month)
}

function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = {
  prepareCardData,
  prepareCardArray,
  months,
  getMonths,
  capitalize
}
