import { Action } from 'redux'

type Reducers<TState, TType extends string, TAction extends Action<TType>> = {
  readonly [Type in TType]: (state: TState, action: TAction) => TState
}

export const createReducer = <
  TState,
  TType extends string,
  TAction extends Action<TType>
>(
  initialState: TState,
  reducers: Reducers<TState, TType, TAction>
) => (state = initialState, action: TAction) => {
  const handler = reducers[action.type]
  const newState = handler ? handler(state, action) : state

  return newState
}
