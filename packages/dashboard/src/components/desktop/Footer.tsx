import React from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Row } from '@ui/layout'
import messages from '../../messages'

interface FooterProps {
  intl: InjectedIntl
}

const Footer = ({ intl }: FooterProps) => (
  <Row>{intl.formatMessage(messages.footer)}</Row>
)

export default injectIntl(Footer)
