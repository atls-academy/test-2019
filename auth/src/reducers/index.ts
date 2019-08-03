import { combineReducers } from 'redux'
import login from '../pages/login/reducers'
import registration from '../pages/registration/reducers'

export default combineReducers({
  login,
  registration,
})
