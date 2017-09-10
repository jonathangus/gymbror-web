import { routerReducer as routing } from 'react-router-redux'
import user from '../use-case/user/reducers/userReducer'
import workouts from '../use-case/workouts/reducers/workoutReducer'

export default {
  routing,
  user,
  workouts
}