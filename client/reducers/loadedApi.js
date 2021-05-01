import { SET_LOADED_API } from '../actions/stockActions'

const initialState = false

const reducer = (state = initialState, action) => {
  // console.log(action.type, ' ============= ', action.bool)
  switch (action.type) {
    case SET_LOADED_API:
        return  action.bool
    default:
      return state
  }
}

export default reducer