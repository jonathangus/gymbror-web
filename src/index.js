import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'react-dates/lib/css/_datepicker.css'
import 'noty/lib/noty.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import createStore from './redux/createStore'
import { match } from 'react-router'
import getRoutes from './Routes'

registerServiceWorker()
;(async () => {
  const { store, history, client } = await createStore()
  const { user } = store.getState()
  const routes = getRoutes(() => Boolean(user.userId))

  match({ history, routes }, (error, redirectLocation, renderProps) => {
    const appEl = document.getElementById('root')
    ReactDOM.render(<App {...renderProps} store={store} client={client} history={history} />, appEl)
  })
})()
