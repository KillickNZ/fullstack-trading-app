import { SET_ACTIVE_STONKS_ITEM } from '../actions/stockActions'

const initialState = 'TSLA'

const reducer = (state = initialState, action) => {
//   console.log(action.type, ' ============= ', action.category)
  switch (action.type) {
    case SET_ACTIVE_STONKS_ITEM:
        return  action.item
    default:
      return state
  }
}

export default reducer