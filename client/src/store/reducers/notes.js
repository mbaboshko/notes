import { CHANGE_ACTIVE_NOTE, NOTES_LOADED } from '../constants/actionTypes'

const initialState = {
  notes: [],
  active: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NOTES_LOADED:
      return { ...state, notes: action.payload }
    case CHANGE_ACTIVE_NOTE:
      return { ...state, active: action.payload }
    default:
      return state
  }
}
