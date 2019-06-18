import styled from '@emotion/styled'
import { get } from '@styled-system/core'
import { height, style } from 'styled-system'
import { ColumnProps, FillProps, LayoutProps, RowProps } from './types'

const fill = (props: FillProps) =>
  height({ height: props.fill ? '100%' : undefined })

const isNumber = n => typeof n === 'number' && !isNaN(n)
const getWidth = (n, scale) =>
  get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%')
const getScale = (n, scale) => scale[n] || getWidth(n, scale)

const flexBasis = style({
  prop: 'flexBasis',
  alias: 'basis',
  key: 'space',
  transformValue: getScale,
})
const flexWrap = style({ prop: 'flexWrap', alias: 'wrap' })
const flexGrow = style({ prop: 'flexGrow', alias: 'grow' })
const flexShrink = style({ prop: 'flexShrink', alias: 'shrink' })

const alignItems = style({ prop: 'alignItems', alias: 'align' })
const justifyContent = style({ prop: 'justifyContent', alias: 'justify' })

const shouldForwardProp = prop => !['fill', 'wrap'].includes(prop)

export const Column = styled('div', { shouldForwardProp })<ColumnProps>(
  {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  alignItems,
  justifyContent,
  flexBasis,
  flexGrow,
  flexWrap,
  fill
)

export const Row = styled('div', { shouldForwardProp })<RowProps>(
  {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  alignItems,
  justifyContent,
  flexBasis,
  flexGrow,
  flexWrap,
  fill
)

const Layout = styled.div<LayoutProps>(
  {
    display: 'flex',
  },
  alignItems,
  justifyContent,
  flexBasis,
  flexGrow,
  flexShrink
)

Layout.defaultProps = {
  grow: 0,
  shrink: 0,
}

export { Layout }
