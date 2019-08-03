import { defineMessages } from 'react-intl'

const namespace: string = 'auth.login'

export default defineMessages({
  entrance: {
    id: `${namespace}.entrance`,
    defaultMessage: 'Вход',
  },
  mail: {
    id: `${namespace}.mail`,
    defaultMessage: 'Почта',
  },
  enterEmail: {
    id: `${namespace}.enter_email`,
    defaultMessage: 'Введите ваш email',
  },
  password: {
    id: `${namespace}.password`,
    defaultMessage: 'Пароль',
  },
  enterPassword: {
    id: `${namespace}.enter_password`,
    defaultMessage: 'Введите пароль',
  },
  login: {
    id: `${namespace}.login`,
    defaultMessage: 'Войти',
  },
  registration: {
    id: `${namespace}.registration`,
    defaultMessage: 'Регистрация',
  },
})
