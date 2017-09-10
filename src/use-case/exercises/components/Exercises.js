import React from 'react'
import FetchStatus from '../../../components/FetchStatus'
import styled from 'styled-components'
import LineChart from '../../../components/LineChart'
import Section from '../../../components/Section'
import PropTypes from 'prop-types'
import TabSelect from './TabSelect'
import ButtonLink from '../../../components/ButtonLink'

const items = [
  {
    name: 'Bänkpress',
    id: 1312,
    type: 'weight'
    // sessions : []
  },
  {
    name: 'Deadlift',
    id: 112,
    type: 'weight'
    // sessions : []
  },
  {
    name: 'Squats',
    id: 1112,
    type: 'weight'
    // sessions : []
  }
]

export default class Exercises extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool
    }),
    selected: PropTypes.number
  }

  render() {
    const { data } = this.props
    const selected = this.props.selected || items[0].id;

    return (
      <Section>
        <FetchStatus {...data}>
          <TabSelect selected={selected} items={data.exercisesFromUser} />
          <div className="u-padding">
            <ButtonLink className="u-padding" path="/add-exercise" text="Add exercise" />
          </div>
        </FetchStatus>
      </Section>
    )
  }
}
