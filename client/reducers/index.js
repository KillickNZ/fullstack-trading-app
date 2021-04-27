import { combineReducers } from 'redux'

import category from './type'
import activeCryptyo from './activeCryptyo'
import activeStonks from './activeStonks'


export default combineReducers({
  category,
  activeCryptyo,
  activeStonks
})
