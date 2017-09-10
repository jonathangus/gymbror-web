import { workoutQuery } from './WorkoutQuery'
import React from 'react'
import { graphql } from 'react-apollo'
import WithUserHoc from '../../../hoc/WithUserHoc'

export default ComposedComponent => {
  const withData = graphql(workoutQuery, {
    options: props => {
      return { pollInterval: 15000, variables: { userId: props.user.userId } }
    }
  })(ComposedComponent)

  return WithUserHoc(withData)
}
