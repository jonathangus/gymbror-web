import React from 'react'
import AddWorkout from '../components/AddWorkout'
import { updateNewWorkout, updateNewWorkoutSessions, clearNewWorkout } from '../actions/workoutActions'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { workoutMutation } from '../apollo/WorkoutQuery'

const AddWorkoutContainer = ({ setData, data, setWorkoutSessions, mutate, clearNewWorkout, user }) => {
  return (
    <AddWorkout
      setData={setData}
      data={data}
      mutate={mutate}
      user={user}
      clearNewWorkout={clearNewWorkout}
      setWorkoutSessions={setWorkoutSessions}
    />
  )
}

const mapStateToProps = state => ({
  data: state.workouts.newItem,
  user : state.user
})
const mapDispatchToProps = dispatch => ({
  setData: (prop, value) => dispatch(updateNewWorkout(prop, value)),
  clearNewWorkout: () => dispatch(clearNewWorkout()),
  setWorkoutSessions: sets => dispatch(updateNewWorkoutSessions(sets))
})

const AddWorkoutWithData = graphql(workoutMutation)(AddWorkoutContainer)

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkoutWithData)
