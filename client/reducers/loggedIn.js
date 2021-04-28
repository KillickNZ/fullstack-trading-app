import { SET_LOGGED_IN } from '../actions/stockActions'

const initialState = null

const reducer = (state = initialState, action) => {
  // console.log(action.type, ' ============= ', action.category)
  switch (action.type) {
    case SET_LOGGED_IN:
        return  action.bool
    default:
      return state
  }
}

export default reducer