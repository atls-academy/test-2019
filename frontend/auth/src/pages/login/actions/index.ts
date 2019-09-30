import gql from 'graphql-tag'
import { auth } from '@frontend/common/src/constants/security'
import * as actions from '../constants'
import stub from './stub'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const login = () => async (dispatch, getState, client) => {
  const { email, password } = getState().auth.login

  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            token {
              token
              expiresIn
            }
            errors {
              email
              password
            }
          }
        }
      `,
      variables: {
        email,
        password,
      },
    })
  } catch (e) {
    dispatch({
      type: auth,
      token: stub.token,
      expiresIn: stub.expiresIn,
    })

    dispatch({
      type: actions.clear,
    })
  }
}
