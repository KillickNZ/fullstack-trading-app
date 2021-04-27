import { SET_ACTIVE_CRYPTYO_ITEM } from '../actions/stockActions'

const initialState = 'dogecoin'

const reducer = (state = initialState, action) => {
//   console.log(action.type, ' ============= ', action.category)
  switch (action.type) {
    case SET_ACTIVE_CRYPTYO_ITEM:
        return  action.item
    default:
      return state
  }
}

export default reducer