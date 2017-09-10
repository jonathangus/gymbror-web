import React from 'react'
import { graphql } from 'react-apollo'
import WithUserHoc from '../../../hoc/WithUserHoc'
import { exercisesQuery } from './ExerciseQuery'

export default ComposedComponent => {
  const withData = graphql(exercisesQuery, {
    options: props => {
      return { pollInterval: 15000, variables: { userId: props.user.userId } }
    }
  })(ComposedComponent)

  return WithUserHoc(withData);

}
