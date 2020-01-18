import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import security from '@frontend/common/src/reducers/security'
import auth from '@frontend/auth/src/reducers'
import users from '@frontend/users/src/reducers'
import config from './config'
import locale from './locale'
import me from './me'

export default combineReducers({
  auth,
  config,
  locale,
  me,
  router,
  security,
  users,
})
