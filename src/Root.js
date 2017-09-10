import LoginPage from './use-case/login/pages/LoginPage'
import Dashboard from './use-case/dashboard/components/Dashboard'
import React from 'react';
import { connect } from 'react-redux';

const Root = (props) => {
  return props.isLoggedIn ? <Dashboard {...props} /> : <LoginPage {...props} />
}

const mapStateToProps = state => ({
  isLoggedIn : Boolean(state.user.userId),
});

export default connect(mapStateToProps)(Root);
