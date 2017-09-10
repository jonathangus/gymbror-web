import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { browserHistory } from 'react-router'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducers from './Reducers'
import { ApolloClient, createNetworkInterface} from 'react-apollo'

export default async (initialState = {}) => {
  const client = new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: '/graphql'
    })
  })

  const enhancers = compose(
    applyMiddleware(thunk, routerMiddleware(browserHistory), client.middleware()),
    autoRehydrate(),
    typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  const finalReducers = combineReducers({
    ...reducers,
    apollo: client.reducer()
  })
  const store = createStore(finalReducers, initialState, enhancers)
  const history = syncHistoryWithStore(browserHistory, store)

  return new Promise(resolve => {
    persistStore(store, {}, () => {
      resolve({ store, history, client })
    })
  })
}
