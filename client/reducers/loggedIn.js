import { SET_LOGGED_IN } from '../actions/stockActions'

const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return action.bool
    default:
      return state
  }
}

export default reducer
