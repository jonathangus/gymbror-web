import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Paper from '../../../components/Paper'
import SetsList from '../../../components/SetsList'

const ExerciseDetail = ({ exercise }) => {
  if (!exercise) return null
  return (
    <div>
      <h2>{exercise.name}</h2>
      {exercise.sessions.map((session, ind) =>
        <Paper key={session.id || ind}>
          <SetsList sets={session.sets} />
        </Paper>
      )}
    </div>
  )
}

ExerciseDetail.propTypes = {
  exercise: PropTypes.object
}

export default ExerciseDetail
