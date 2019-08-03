import React from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Layout, Row } from '@ui/layout'
import { Space, Text } from '@ui/text'
import messages from '../../messages'

interface Props {
  intl: InjectedIntl
}

const Footer = ({ intl }: Props) => (
  <Row basis={40}>
    <Layout basis='10%' />
    <Text>
      {'©'}
      <Space />
      {intl.formatDate(new Date(), { year: 'numeric' })}
      <Space />
      {intl.formatMessage(messages.copyright)}
    </Text>
  </Row>
)

export default injectIntl(Footer)
