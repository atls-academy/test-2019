import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { createReducer } from '@utils/reducer'
import * as actions from '../constants/security'

const initialState = {
  token: '',
  expiresIn: '',
}

const reducer = createReducer(initialState, {
  [actions.auth]: (state, { token, expiresIn }) => ({
    token,
    expiresIn,
  }),
  [actions.logout]: () => initialState,
})

export default persistReducer(
  {
    storage,
    key: 'token',
    keyPrefix: 'frontend',
    version: 1,
  },
  reducer
)
