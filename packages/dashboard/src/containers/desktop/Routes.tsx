import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthDesktop as Auth } from '@aunited/auth'
import App from './App'

const Routes = () => (
  <Switch>
    <Route path='/auth' component={Auth} />
    <App>
      <Switch>
        <Route path='/' />
      </Switch>
    </App>
  </Switch>
)

export default Routes
