import { SET_LOGGED_IN, SET_LOGGED_OUT } from '../actions/userActions'

const initialState = {
  isLoggingIn: false,
  loginError: null,
  userId: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        userId: action.userId
      }

    case SET_LOGGED_OUT:
      return {
        ...initialState
      }
    default:
      return state
  }
}
