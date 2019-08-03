import gql from 'graphql-tag'
import * as actions from '../constants/list'
import stub from './stub'

export const load = () => async (dispatch, getState, client) => {
  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query Users {
          users {
            rows {
              id
              email
              profile {
                firstName
                lastName
              }
              registeredAt
              lastLogonAt
            }
            count
          }
        }
      `,
    })
  } catch (e) {
    dispatch({
      type: actions.load,
      list: stub,
    })
  }
}

export const clear = () => ({
  type: actions.clear,
})
