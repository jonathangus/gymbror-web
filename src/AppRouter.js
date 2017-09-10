import PropTypes from 'prop-types';
import React from 'react';
import { Router } from 'react-router';
import getRoutes from './Routes';
import { connect } from 'react-redux';

class AppRouter extends React.Component {
  static propTypes = {
    history: PropTypes.any.isRequired,
    store: PropTypes.object.isRequired
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.isLoggedIn() !== this.props.isLoggedIn()
  }

  render() {
    const { history, isLoggedIn } = this.props;

    return <Router routes={getRoutes(isLoggedIn)} history={history} />;
  }
}

const mapStateToProps = state => ({
  isLoggedIn: () => Boolean(state.user.userId),
});


export default connect(mapStateToProps)(AppRouter);
