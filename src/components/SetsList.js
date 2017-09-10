import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const List = styled.ul`
     margin-top: 20px;
`

const SetsList = ({ sets = [] }) => {
  return (
    <List>
      {sets.map((set, i) =>
        <li key={i}>
          {set.reps} x {set.value}
        </li>
      )}
    </List>
  )
}

SetsList.propTypes = {
  sets: PropTypes.arrayOf(
    PropTypes.shape({
      reps: PropTypes.any,
      value: PropTypes.any
    })
  )
}

export default SetsList
