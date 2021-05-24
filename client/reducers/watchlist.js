import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../actions/stockActions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return [...state, action.item]
    case REMOVE_FROM_WATCHLIST:
      return state.filter(code => code === !action.item)
    default:
      return state
  }
}

export default reducer
