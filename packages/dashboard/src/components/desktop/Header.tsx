import React from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Layout } from '@ui/layout'
import { Header as HeaderBase } from '@ui/header'
import { Space, Text } from '@ui/text'
import { Link, RouteLink } from '@ui/link'
import messages from '../../messages'

interface Props {
  firstName?: string
  lastName?: string
  intl: InjectedIntl
  onLogout: () => void
}

const Header = ({ firstName, lastName, intl, onLogout }: Props) => (
  <HeaderBase>
    <Layout basis='10%' />
    <RouteLink to='/profile' color='ebony' hoverColor='lightGray'>
      {firstName}
      <Space />
      {lastName}
    </RouteLink>
    <Layout grow={1} />
    <Link onClick={onLogout} size='s' weight='medium' hoverColor='blueBayoux'>
      {intl.formatMessage(messages.exit)}
    </Link>
    <Layout basis='10%' />
  </HeaderBase>
)

export default injectIntl(Header)
