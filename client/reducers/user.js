import { SET_USER } from '../actions/userActions'

const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.activeUser
    default:
      return state
  }
}

export default reducer
