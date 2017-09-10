import React from 'react'
import styled, { keyframes } from 'styled-components'
import Loader from './Loader'

const FetchStatus = styled.div`
  padding: 30px 0;
`

export default ({ loading, error, children }) => {
  return <FetchStatus>
    {error && error.message}
    {!error && children}
  </FetchStatus>
}
