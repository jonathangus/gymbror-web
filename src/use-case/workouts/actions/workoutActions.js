export const UPDATE_NEW_WORKOUT_META = 'UPDATE_NEW_WORKOUT_META'
export const UPDATE_SESSIONS_NEW_WORKOUT = 'UPDATE_SESSIONS_NEW_WORKOUT'
export const CLEAR_NEW_WORKOUT = 'CLEAR_NEW_WORKOUT'

export const updateNewWorkout = (prop, value) => ({
  type: UPDATE_NEW_WORKOUT_META,
  data: { [prop]: value }
})

export const updateNewWorkoutSessions = (sessions) => ({
  type: UPDATE_SESSIONS_NEW_WORKOUT,
  sessions
})


export const clearNewWorkout = () => ({
  type : CLEAR_NEW_WORKOUT
})