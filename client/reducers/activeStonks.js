import { SET_ACTIVE_STONKS_ITEM } from '../actions/stockActions'

const initialState = 'TSLA'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_STONKS_ITEM:
      return action.item
    default:
      return state
  }
}

export default reducer
