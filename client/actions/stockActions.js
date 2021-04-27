import api from '../apis/mainApi'

export const SET_ACTIVE_CRYPTYO_ITEM = 'SET_ACTIVE_CRYPTYO_ITEM'
export const SET_ACTIVE_TYPE = 'SET_ACTIVE_TYPE'
export const SET_ACTIVE_STONKS_ITEM = 'SET_ACTIVE_STONKS_ITEM'


export function setCurrentCrypto (item) {
  return {
    type: SET_ACTIVE_CRYPTYO_ITEM,
    item: item
  }
}

export function setCurrentStonks (item) {
  return {
    type: SET_ACTIVE_STONKS_ITEM,
    item: item
  }
}

export function setType (type) {
  return {
    type: SET_ACTIVE_TYPE,
    category: type
  }
}

// export function fetchStock () {
//   return dispatch => {
//     return getStock()
//       .then(stock => {
//         dispatch(setStock(stock))
//         return null
//       })
//   }
// }
