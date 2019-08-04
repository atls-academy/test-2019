import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
import api from './middleware/api'

const configureStore = (initialState, history) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const enhancer = composeEnhancers(
    applyMiddleware(routerMiddleware(history), api(history))
  )

  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
  }

  const persistor = persistStore(store)

  return {
    persistor,
    store,
  }
}

export default configureStore
