import React from 'react'
import SetsPicker from './SetsPicker'
import Button from '../../../components/Button'
import PropTypes from 'prop-types'
import ExerciseQueryHoc from '../../exercises/apollo/ExerciseQueryHoc'
import styled from 'styled-components'

const NoResults = styled.div`
  padding: 20px 0;
  color: #CCC;
`

class ExerciseSelector extends React.Component {
  static propTypes = {
    setWorkoutSessions: PropTypes.func.isRequired,
    sessions: PropTypes.array
  }

  static defaultProps = {
    sessions: []
  }

  updateSession = session => {
    const newSessions = this.props.sessions.map(sess => (sess.exerciseId === session.exerciseId ? session : sess))
    this.props.setWorkoutSessions(newSessions)
  }

  addExercise = exercise => {
    const { sessions } = this.props
    const lastSessionSets = sessions.length && sessions[sessions.length - 1].sets

    const newSession = {
      exerciseId: exercise.id,
      name: exercise.name,
      type: exercise.type,
      sets: lastSessionSets || [{ reps: 10, value: 50 }]
    }

    this.props.setWorkoutSessions([...this.props.sessions, newSession])
  }

  removeExercise = exercise => {
    this.props.setWorkoutSessions(this.props.sessions.filter(s => s.exerciseId !== exercise.exerciseId))
  }

  render() {
    const { data, sessions } = this.props
    if (!data.exercisesFromUser) return null

    const ids = sessions.map(e => e.exerciseId)
    const available = data.exercisesFromUser.filter(e => !ids.includes(e.id))

    return (
      <div>
        {available.map((exercise, i) =>
          <Button key={exercise.id || i} onClick={() => this.addExercise(exercise)} text={exercise.name} />
        )}
        {sessions.map((session, i) =>
          <SetsPicker
            removeExercise={this.removeExercise}
            updateSession={this.updateSession}
            session={session}
            key={session.id || i}
          />
        )}
        {!sessions.length && <NoResults>You need to add some exercises</NoResults>}
      </div>
    )
  }
}

export default ExerciseQueryHoc(ExerciseSelector)
