import React from 'react'
import AddExercise from '../components/AddExercise'
import PropTypes from 'prop-types'
import { graphql, gql } from 'react-apollo'
import WithUserHoc from '../../../hoc/WithUserHoc'

const AddExerciseContainer = graphql(gql`
    mutation addExercise($exercise: ExerciseInput!) {
        addExercise(input: $exercise)
    }
`)(AddExercise);


export default WithUserHoc(AddExerciseContainer)
