import React from 'react'
import AppRouter from './AppRouter'
import { ApolloProvider } from 'react-apollo'

const App = props =>
  <ApolloProvider client={props.client} store={props.store}>
    <AppRouter {...props} />
  </ApolloProvider>

export default App
