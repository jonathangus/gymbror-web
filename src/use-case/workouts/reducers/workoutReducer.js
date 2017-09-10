import { UPDATE_NEW_WORKOUT_META, UPDATE_SESSIONS_NEW_WORKOUT, CLEAR_NEW_WORKOUT } from '../actions/workoutActions'
import { REHYDRATE } from 'redux-persist/constants'
const initialState = {
  newItem: {
    title: undefined,
    comment: undefined,
    sessions: undefined,
    date: undefined
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      const incoming = action.payload.workouts
      if (incoming) return { ...state, ...incoming }

    case UPDATE_NEW_WORKOUT_META:
      return {
        ...state,
        newItem: {
          ...state.newItem,
          ...action.data
        }
      }

    case UPDATE_SESSIONS_NEW_WORKOUT:
      return {
        ...state,
        newItem: {
          ...state.newItem,
          sessions: action.sessions
        }
      }

    case CLEAR_NEW_WORKOUT: {
      return {
        ...state,
        newItem : initialState.newItem
      }
    }

    default:
      return {
        ...state
      }
  }
}
