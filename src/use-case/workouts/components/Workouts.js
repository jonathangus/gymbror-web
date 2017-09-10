/* @flow */
import React from 'react'
import Section from '../../../components/Section'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import styled from 'styled-components'
import colors from '../../../config/colors'
import ButtonLink from '../../../components/ButtonLink'
import FetchStatus from '../../../components/FetchStatus'
import moment from 'moment';

const Row = styled(Link)`
  padding: 15px;
  border-bottom: 1px solid ${colors.light};
  display: block;
  text-decoration: none;
  color: ${colors.light};
  transition: all 0.3s ease;
  
  &:last-of-type {
    border-bottom: none;
    margin-bottom: 20px;
  }
  
  &:hover {
    color: white;
   }
`

export default class Workouts extends React.Component {
  static propTypes = {
    data: PropTypes.object
  }

  render() {
    const { data } = this.props;

    return (
      <Section padding>
        <FetchStatus {...data}>
          {data.workoutsFromUser && data.workoutsFromUser.map((item, i) =>
            <Row key={item.id || i} to={`/workouts/${item.id}`}>
              {moment(item.date).format('YYYY-MM-DD')}
            </Row>
          )}
        </FetchStatus>
        <ButtonLink path="/add-workout" text="Add new workout" />
      </Section>
    )
  }
}
