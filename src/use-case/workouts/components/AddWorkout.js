import React from 'react'
import CleanInput from '../../../components/CleanInput'
import CleanTextarea from '../../../components/CleanTextarea'
import { SingleDatePicker } from 'react-dates'
import ExerciseSelector from './ExerciseSelector'
import PropTypes from 'prop-types'
import moment from 'moment'
import styled from 'styled-components'
import Button from '../../../components/Button'
import Noty from 'noty'


const Part = styled.div`
  margin-bottom: 15px;
`

export default class AddWorkout extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    setWorkoutSessions: PropTypes.func.isRequired,
    clearNewWorkout: PropTypes.func.isRequired
  }

  state = {}

  onSubmit = e => {
    e.preventDefault()

    if (this.canSubmit()) {
      const { userId } = this.props.user
      const { title, date, comment } = this.props.data
      console.log({
        title,
        date,
        comment,
        userId
      })
      this.props
        .mutate({
          variables: {
            workout: {
              title,
              date,
              comment,
              userId
            }
          }
        })
        .then(({ data }) => {
          this.props.clearNewWorkout()
          // new Noty({
          //   type: 'success',
          //   text: `Workout created!`,
          //   timeout: 3500
          // }).show()
        })
        .catch(error => {
          this.props.clearNewWorkout()
          // new Noty({
          //   type: 'error',
          //   text: `Error creating workout: ${error.message}`,
          //   timeout: 3500
          // }).show()
        })
    }
  }

  canSubmit = () => Boolean(this.props.data.date && (this.props.data.sessions && this.props.data.sessions.length))

  dateChanged = date => {
    const value = date && date.format()
    this.props.setData('date', value)
  }

  onChange = (prop, value) => {
    this.props.setData(prop, value)
  }

  render() {
    const { data, setWorkoutSessions } = this.props
    const date = data.date && moment(data.date)

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Part>
            <label htmlFor="title">Title</label>
            <CleanInput name="title" value={data.title} onChange={value => this.onChange('title', value)} />
          </Part>

          <Part>
            <label htmlFor="comment">Comment</label>
            <CleanTextarea name="comment" value={data.comment} onChange={value => this.onChange('comment', value)} />
          </Part>

          <Part>
            <SingleDatePicker
              date={date}
              onDateChange={this.dateChanged}
              focused={this.state.focused}
              onFocusChange={({ focused }) => this.setState({ focused })}
            />
          </Part>

          <ExerciseSelector sessions={data.sessions} setWorkoutSessions={setWorkoutSessions} />
          <Button type="submit" text="Create" />
        </form>
      </div>
    )
  }
}
