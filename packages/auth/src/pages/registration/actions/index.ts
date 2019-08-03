import gql from 'graphql-tag'
import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const register = () => async (dispatch, getState, client) => {
  const { email, password } = getState().auth.registration

  const { data } = await client.mutate({
    mutation: gql`
      mutation Register($input: RegisterUserInput!) {
        register(input: $input) {
          errors {
            email
            password
          }
        }
      }
    `,
    variables: {
      input: {
        email,
        password,
      },
    },
  })

  if (data.register.errors) {
    dispatch({
      type: actions.setErrors,
      errors: data.register.errors,
    })
  } else {
    dispatch({
      type: actions.clear,
    })
  }
}

export const clear = () => ({
  type: actions.clear,
})
