/* @flow */
import React from 'react'
import CleanInput from '../../../components/CleanInput'
import Button from '../../../components/Button'
import { exercisesQuery } from '../apollo/ExerciseQuery'
import Noty from 'noty'
import styled from 'styled-components'

const Part = styled.div`
  margin-bottom: 15px;
`


export default class AddExercise extends React.Component {
  state = {
    type: ''
  }

  onChange = (prop, value) => {
    this.setState({
      [prop]: value
    })
  }

  onSubmit = e => {
    const { name, type } = this.state
    e.preventDefault()

    if (name && type) {
      this.props
        .mutate({
          variables: {
            exercise: {
              name,
              type,
              userId: this.props.user.userId
            }
          },
          refetchQueries: [{ query: exercisesQuery, variables: { userId: this.props.user.userId } }]
        })
        .then(({ data }) => {
          this.setState({
            type: '',
            name : ''
          })
          new Noty({
            type: 'success',
            text: `Exercise created!`,
            timeout: 3500
          }).show()
        })
        .catch(error => {
          new Noty({
            type: 'error',
            text: `Error creating exercise: ${error.message}`,
            timeout: 3500
          }).show()
        })
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Part>
          <label htmlFor="name">Exercise name</label>
          <CleanInput name="name" onChange={value => this.onChange('name', value)} value={this.state.name} />
        </Part>
        <Part>
          <label htmlFor="type">Type</label>
          <CleanInput name="type" label="Type" onChange={value => this.onChange('type', value)} value={this.state.type} />
        </Part>
        <Button type="submit" text="Create" />
      </form>
    )
  }
}
