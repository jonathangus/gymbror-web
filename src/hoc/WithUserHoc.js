import React from 'react';
import { connect } from 'react-redux'

export default (ComposedComponent) => {
  const WithUserHoc = (props) => <ComposedComponent {...props} />

  return connect((state) => ({
    user: state.user
  }))(WithUserHoc)
}
