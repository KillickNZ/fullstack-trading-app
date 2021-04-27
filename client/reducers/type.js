import { SET_ACTIVE_TYPE } from '../actions/stockActions'

const initialState = 'cryptyo'

const reducer = (state = initialState, action) => {
  // console.log(action.type, ' ============= ', action.category)
  switch (action.type) {
    case SET_ACTIVE_TYPE:
        return  action.category
    default:
      return state
  }
}

export default reducer