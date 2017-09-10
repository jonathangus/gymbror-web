import { push } from 'react-router-redux'

export const SET_LOGGED_IN = 'SET_LOGGED_IN'
export const SET_LOGGED_OUT = 'SET_LOGGED_OUT'

export const setLoggedIn = userId => ({
  type: SET_LOGGED_IN,
  userId
})

export const logoutUser = () => {
  return dispatch => {
    dispatch({
      type: SET_LOGGED_OUT
    })
    dispatch(push('/'))
  }
}
