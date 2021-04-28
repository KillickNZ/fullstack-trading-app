import { SET_LOADED_API } from '../actions/stockActions'

const initialState = null

const reducer = (state = initialState, action) => {
  // console.log(action.type, ' ============= ', action.category)
  switch (action.type) {
    case SET_LOADED_API:
        return  action.bool
    default:
      return state
  }
}

export default reducer