import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Paper from '../../../components/Paper'
import SetsList from '../../../components/SetsList'
import moment from 'moment'

const Top = styled.div`
  margin-bottom: 20px;
  
  .date {
    color: #CCC;
    font-size: 14px;
  }
`

const BlockQuote = styled.blockquote`
    padding-left: 20px;
    border-left: 1px solid #CCC;
    min-height: 50px;
`

const WorkoutSidebar = ({ workout }) => {
  console.log({ workout })
  return (
    <div>
      <Top>
        <h2>{workout.title || 'Unnamed workout'}</h2>
        <div className="date">{moment(workout.date).format('YYYY-MM-DD')}</div>
      </Top>
      {workout.comment && <BlockQuote>{workout.comment}</BlockQuote>}
      {workout.sessions.map((session, index) =>
        <Paper key={session.id || index}>
          <h2>{session.exerciseName}</h2>
          <SetsList sets={session.sets} />
        </Paper>
      )}
    </div>
  )
}

WorkoutSidebar.propTypes = {
  workout: PropTypes.object
}

export default WorkoutSidebar
