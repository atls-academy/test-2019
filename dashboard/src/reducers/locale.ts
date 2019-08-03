import { createReducer } from '@utils/reducer'
import { addLocaleData } from 'react-intl'
import ruLocaleData from 'react-intl/locale-data/ru'

addLocaleData(ruLocaleData)

const initialState = {
  locale: 'ru',
}

export default createReducer(initialState, {})
