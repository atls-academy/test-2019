import * as actions from '../constants/security'

export const auth = ({ token, expiresIn }) => ({
  type: actions.auth,
  token,
  expiresIn,
})

export const logout = () => ({
  type: actions.logout,
})
