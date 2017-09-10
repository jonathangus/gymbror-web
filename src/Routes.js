// @flow
import WorkoutSidebarContainer from './use-case/workouts/containers/WorkoutSidebarContainer'
import AddWorkoutContainer from './use-case/workouts/containers/AddWorkoutContainer'
import ExerciseDetailContainer from './use-case/exercises/containers/ExerciseDetailContainer';
import AddExerciseContainer from './use-case/exercises/containers/AddExerciseContainer'
import Wat from './components/Wat'
import Root from './Root'


const getRoutes = (loggedIn:Function) => {
  const requireAuth = (nextState, replace) => !loggedIn() && replace('/');

  return {
    childRoutes: [
      {
        path: '/',
        component: Root,
        childRoutes: [
          {
            path: '/workouts/:workoutId',
            component: WorkoutSidebarContainer,
            onEnter : requireAuth
          },
          {
            path: '/add-workout',
            component: AddWorkoutContainer,
            onEnter : requireAuth
          },
          {
            path: '/exercises/:exerciseId',
            component: ExerciseDetailContainer,
            onEnter : requireAuth
          },
          {
            path: '/add-exercise',
            component: AddExerciseContainer,
            onEnter : requireAuth
          },
          {
            path: '*',
            component: Wat,
            onEnter : requireAuth
          }
        ]
      }
    ]
  }
}

export default getRoutes
