import React from 'react';
import Login from '../components/Login'
import { connect } from 'react-redux'
import { setLoggedIn } from '../../user/actions/userActions'

const LoginContainer = ({onLogin}) => (
    <Login onLogin={onLogin}/>
);

const mapStateToProps = state => ({
  isLoggingIn : state.user.isLoggingIn,
  loginError : state.user.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin : id => dispatch(setLoggedIn(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
