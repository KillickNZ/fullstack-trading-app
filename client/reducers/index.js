import { combineReducers } from 'redux'

import category from './type'
import activeCryptyo from './activeCryptyo'
import activeStonks from './activeStonks'
import activeUser from './user'
import loggedIn from './loggedIn'
import loadedApi from './loadedApi'

export default combineReducers({
  category,
  activeCryptyo,
  activeStonks,
  activeUser,
  loggedIn,
  loadedApi
})
