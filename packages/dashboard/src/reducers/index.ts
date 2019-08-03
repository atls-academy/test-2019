import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import security from '@aunited/common/src/reducers/security'
import auth from '@aunited/auth/src/reducers'
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
})
