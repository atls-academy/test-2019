import React, { FC } from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Column, Layout, Row } from '@ui/layout'
import { Text } from '@ui/text'
import { Input } from '@ui/input'
import { Button } from '@ui/button'
import { RouteLink } from '@ui/link'
import messages from '../../messages'

interface Props {
  intl: InjectedIntl
}

const Login: FC<Props> = ({
  email,
  errors,
  intl,
  password,
  onChangeEmail,
  onChangePassword,
  onLogin,
}) => (
  <Column align='center'>
    <Layout basis={60} />
    <Text size='2xl' height='xs' weight='bold'>
      {intl.formatMessage(messages.entrance)}
    </Text>
    <Layout basis={40} />
    <Row justify='center'>
      <Layout basis={360}>
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.mail)}
        </Text>
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row justify='center'>
      <Layout basis={360}>
        <Input
          type='email'
          border='lightGray'
          error={errors.email}
          value={email}
          onChange={onChangeEmail}
          placeholder={intl.formatMessage(messages.enterEmail)}
        />
      </Layout>
    </Row>
    <Layout basis={24} />
    <Row justify='center'>
      <Layout basis={360}>
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.password)}
        </Text>
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row justify='center'>
      <Layout basis={360}>
        <Input
          type='password'
          border='lightGray'
          error={errors.password}
          value={password}
          onEnter={onLogin}
          onChange={onChangePassword}
          placeholder={intl.formatMessage(messages.enterPassword)}
        />
      </Layout>
    </Row>
    <Layout basis={24} />
    <Row justify='center'>
      <Layout basis={360}>
        <Button text disabled={!email || !password} onClick={onLogin}>
          {intl.formatMessage(messages.login)}
        </Button>
      </Layout>
    </Row>
    <Layout basis={16} />
    <RouteLink
      to='/auth/registration'
      size='s'
      height='xs'
      weight='medium'
      color='black'
      hoverColor='blueBayoux'
    >
      {intl.formatMessage(messages.registration)}
    </RouteLink>
  </Column>
)

export default injectIntl(Login)
