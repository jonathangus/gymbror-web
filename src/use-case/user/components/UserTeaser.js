import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Teaser = styled.div`
  color: #FFF;
  span {
    color: #CCC;
     cursor: pointer;
     &:hover {
      text-decoration: underline;
      }
  }
`

export default class UserTeaser extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired
  }

  render() {
    const { user, onLogout } = this.props

    return (
      <Teaser>
        {user.userId} / <span onClick={onLogout}>Logout</span>
      </Teaser>
    )
  }
}
