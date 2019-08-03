import React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory as createHistory } from 'history'
import Root from './containers/desktop/Root'
import './index.css'

const history = createHistory()

render(<Root history={history} />, document.getElementById('app'))
