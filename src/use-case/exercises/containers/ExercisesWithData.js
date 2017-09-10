import React from 'react'
import Exercises from '../components/Exercises'
import PropTypes from 'prop-types'
import { graphql, gql } from 'react-apollo'
import ExerciseQueryHoc from '../../exercises/apollo/ExerciseQueryHoc';


export default ExerciseQueryHoc(Exercises)
