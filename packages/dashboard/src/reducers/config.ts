import { createReducer } from '@utils/reducer'

const initialState = {
  apiUrl: process.env.API_URL || 'http://localhost:3000/graphql',
}

export default createReducer(initialState, {})
