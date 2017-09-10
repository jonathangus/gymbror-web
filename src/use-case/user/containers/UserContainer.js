import React from 'react'
import UserTeaser from '../components/UserTeaser'
import { connect } from 'react-redux'
import { logoutUser } from '../../user/actions/userActions'

const UserContainer = ({ onLogout, user }) => <UserTeaser user={user} onLogout={onLogout} />

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  onLogout: id => dispatch(logoutUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
