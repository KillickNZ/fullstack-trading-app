import api from '../apis/mainApi'

export const SET_ACTIVE_CRYPTYO_ITEM = 'SET_ACTIVE_CRYPTYO_ITEM'
export const SET_ACTIVE_TYPE = 'SET_ACTIVE_TYPE'
export const SET_ACTIVE_STONKS_ITEM = 'SET_ACTIVE_STONKS_ITEM'
export const SET_USER = 'SET_USER'
export const SET_LOGGED_IN = 'SET_LOGGED_IN'
export const SET_LOADED_API = 'SET_LOADED_API'

export function setCurrentCryptyo (item) {
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

export function setUser (user) {
  return {
    type: SET_USER,
    activeUser: user
  }
}

export function setLoggedIn(bool) {
  return {
    type: SET_LOGGED_IN,
    bool: bool
  }
}

export function loadedApiData (bool) {
  console.log("Actioning")
  return {
    type: SET_LOADED_API,
    bool: bool
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
