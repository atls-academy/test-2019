import React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory as createHistory } from 'history'
import Root from './containers/desktop/Root'
import { configureStore } from './store'
import './index.css'

const history = createHistory()
const { store, persistor } = configureStore({}, history)

render(
  <Root store={store} persistor={persistor} history={history} />,
  document.getElementById('app')
)
