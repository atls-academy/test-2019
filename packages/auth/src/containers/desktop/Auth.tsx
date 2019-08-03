import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../../pages/login/containers/desktop/Login'
import Registration from '../../pages/registration/containers/desktop/Registration'

const Auth = () => (
  <Switch>
    <Route path='/auth/registration' component={Registration} />
    <Route path='/auth' component={Login} />
  </Switch>
)

export default Auth
