import React from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Row } from '@ui/layout'
import messages from '../../messages'

interface HeaderProps {
  intl: InjectedIntl
}

const Header = ({ intl }: HeaderProps) => (
  <Row>{intl.formatMessage(messages.header)}</Row>
)

export default injectIntl(Header)
