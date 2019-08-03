import { createElement } from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import ruLocaleData from 'react-intl/locale-data/ru'
import enLocaleData from 'react-intl/locale-data/en'

addLocaleData(ruLocaleData)
addLocaleData(enLocaleData)

export default ({ children }) =>
  createElement(
    IntlProvider,
    {
      defaultLocale: 'ru',
      locale: 'ru',
    },
    children
  )
