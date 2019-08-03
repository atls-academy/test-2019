import { createElement } from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'
import ButtonUi, { ButtonProps } from './Button'

const Orange = styled(ButtonUi)<ButtonProps>(
  ({ theme }) => ({
    color: theme.colors.white,
    border: `1px solid ${theme.colors.orange}`,
    backgroundColor: theme.colors.orange,
    boxShadow: '0 2px 4px 0 rgba(255, 168, 0, 0.3)',
    transition: 'ease-in 150ms',
  }),
  ifProp('active', ({ theme }: any) => ({
    [':hover']: {
      color: theme.colors.ebony,
      boxShadow: '0 2px 6px 0 rgba(255, 168, 0, 0.7)',
    },
    [':active']: {
      color: theme.colors.ebony,
      boxShadow: '0 1px 2px 0 rgba(255, 168, 0, 0.3)',
    },
  })),
  ifProp('disabled', ({ theme }: any) => ({
    cursor: 'default',
    color: theme.colors.blueHaze,
    background: theme.colors.white,
    border: `1px solid ${theme.colors.blueHaze}`,
    boxShadow: 'none !important',
  }))
)

const Button = ({ disabled, onClick, children, ...props }: ButtonProps) =>
  createElement(
    Orange,
    {
      type: 'button',
      disabled,
      active: !disabled,
      onClick: disabled ? null : onClick,
      ...props,
    },
    children
  )

Button.defaultProps = {
  onClick: () => {},
}

export default Button
