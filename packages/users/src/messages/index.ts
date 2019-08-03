import { defineMessages } from 'react-intl'

export const namespace = '@aunited/users'

export default defineMessages({
  users: {
    id: `${namespace}.users`,
    defaultMessage: 'Пользователи',
  },
  at: {
    id: `${namespace}.at`,
    defaultMessage: 'в',
  },
  name: {
    id: `${namespace}.name`,
    defaultMessage: 'имя',
  },
  email: {
    id: `${namespace}.email`,
    defaultMessage: 'email',
  },
  registered: {
    id: `${namespace}.registered`,
    defaultMessage: 'зарегестрирован',
  },
  lastLogin: {
    id: `${namespace}.lastLogin`,
    defaultMessage: 'последний вход',
  },
})
