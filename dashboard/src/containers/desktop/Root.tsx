import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { History } from 'history'
import { hot } from 'react-hot-loader'
import { Router } from 'react-router-dom'
import { ThemeProvider } from '@ui/theme'
import IntlProvider from '../IntlProvider'
import Preload from '../Preload'
import Routes from './Routes'

interface RootProps {
  history: History
}

const Root = ({ store, persistor, history }: RootProps) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Preload history={history}>
        <IntlProvider>
          <ThemeProvider>
            <Router history={history}>
              <Routes />
            </Router>
          </ThemeProvider>
        </IntlProvider>
      </Preload>
    </PersistGate>
  </Provider>
)

export default hot(module)(Root)
