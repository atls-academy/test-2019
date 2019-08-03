import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthDesktop as Auth } from '@aunited/auth'
import { ListDesktop as Users } from '@aunited/users'
import App from './App'

const Routes = () => (
  <Switch>
    <Route path='/auth' component={Auth} />
    <App>
      <Switch>
        <Route path='/' exact component={Users} />
      </Switch>
    </App>
  </Switch>
)

export default Routes
