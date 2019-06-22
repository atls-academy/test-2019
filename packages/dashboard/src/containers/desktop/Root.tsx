import React from 'react'
import { History } from 'history'
import { hot } from 'react-hot-loader'
import { Router } from 'react-router-dom'
import { ThemeProvider } from '@ui/theme'
import IntlProvider from '../IntlProvider'
import Routes from './Routes'

interface RootProps {
  history: History
}

const Root = ({ history }: RootProps) => (
  <IntlProvider>
    <ThemeProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  </IntlProvider>
)

export default hot(module)(Root)
