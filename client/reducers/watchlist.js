import { ADD_TO_WATCHLIST } from '../actions/stockActions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return [...state, action.item]
    //   return action.item
    default:
      return state
  }
}

export default reducer
