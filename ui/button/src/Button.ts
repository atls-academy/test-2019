import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'

export interface ButtonUiProps {
  active?: boolean
  disabled?: boolean
  text?: boolean
}

export interface ButtonProps extends ButtonUiProps {
  children?: ReactNode
  onClick?: () => void
  type?: 'button' | 'reset' | 'submit'
}

const ButtonUi = styled('button')<ButtonUiProps>(
  ({ theme }) => ({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    padding: 0,
    border: 'none',
    borderRadius: theme.borderRadius.n,
    outline: 0,
    transition: '0.2s',
    cursor: 'pointer',
  }),
  ifProp('text', ({ theme }: any) => ({
    fontFamily: theme.fontFamily.sf,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.s,
  }))
)

export default ButtonUi
