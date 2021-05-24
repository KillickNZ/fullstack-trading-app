export const SET_ACTIVE_CRYPTYO_ITEM = 'SET_ACTIVE_CRYPTYO_ITEM'
export const SET_ACTIVE_TYPE = 'SET_ACTIVE_TYPE'
export const SET_ACTIVE_STONKS_ITEM = 'SET_ACTIVE_STONKS_ITEM'
export const SET_LOADED_API = 'SET_LOADED_API'
export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST'
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST'

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

export function loadedApiData (bool) {
  console.log('Actioning')
  return {
    type: SET_LOADED_API,
    bool: bool
  }
}

export function addToWatchList (item) {
  return {
    type: ADD_TO_WATCHLIST,
    item: item
  }
}
