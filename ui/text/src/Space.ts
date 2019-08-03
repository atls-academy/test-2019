import { createElement } from 'react'
import styled from '@emotion/styled'

interface SpaceProps {
  count?: number
}

const Span = styled('span')<{}>(() => ({
  display: 'inline-flex',
}))

export const Space = ({ count = 1 }: SpaceProps) =>
  createElement(Span, {
    children: '\u00A0'.repeat(count),
  })
