import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import colors from '../../../config/colors'

const Wrapper = styled.ul`
  display: flex;
`

const Tab = styled.li`
  display: block;
  
  a {
  color: ${colors.light};
  display: block;
  text-decoration: none;
  padding: 15px;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
  
    &.selected {
     border-color: #33d4e3;
      color: white;
    }
  }
`


const TabSelect = ({ items = [], selected }) => {
  return (
    <Wrapper>
      {items.map((option, index) =>
        <Tab key={option.id}>
          <Link
            //isActive={() => option.id == selected}
            activeClassName={`selected`}
            className="u-bold u-upper"
            to={`/exercises/${option.id}`}>
            {option.name}
          </Link>
        </Tab>
      )}
    </Wrapper>
  )
}

TabSelect.propTypes = {
  selected: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.any.isRequired
    })
  )
}

export default TabSelect
