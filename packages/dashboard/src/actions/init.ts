import gql from 'graphql-tag'
import * as actions from '../constants/me'

export const init = () => async (dispatch, getState, client) => {
  const stub = {
    id: 1,
    email: 'crockford@lmao.com',
    profile: {
      firstName: 'Дуглас',
      lastName: 'Крокфорд',
    },
  }
  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query Me {
          me {
            id
            email
            profile {
              firstName
              lastName
            }
            registeredAt
            lastLogonAt
          }
        }
      `,
    })
  } catch (e) {
    dispatch({
      type: actions.load,
      user: stub,
    })
  }
}

export const clear = () => ({
  type: actions.clear,
})
