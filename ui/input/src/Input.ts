import { createElement, KeyboardEvent } from 'react'
import Wrapper from './Wrapper'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'

export interface InputElementProps {
  color?: string
  borderColor?: string
  disabled?: boolean
  error?: boolean
  warning?: boolean
  transparent?: boolean
  select?: boolean
}

export interface InputProps extends InputElementProps {
  id?: string
  type?: string
  readOnly?: boolean
  placeholder?: string
  onChange?: (value: string) => void
  value?: string
  onEnter?: () => void
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void
  onClick?: () => void
}

const InputElement = styled('input', {
  shouldForwardProp: prop =>
    !['borderColor', 'error', 'transparent', 'select'].includes(prop),
})<WrapperElementProps>(
  ({ color, borderColor, theme }) => ({
    width: '100%',
    height: 40,
    boxSizing: 'border-box',
    borderRadius: `${theme.borderRadius.n}px`,
    outline: 'none',
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors[borderColor]}`,
    paddingLeft: '20px',
    boxShadow: '0 2px 4px 0 rgba(41, 50, 70, 0.1)',
    transition: '100ms ease all',
    fontFamily: theme.fontFamily.sf,
    fontSize: `${theme.fontSizes.s}px`,
    fontWeight: theme.fontWeights.normal,
    lineHeight: theme.lineHeights.s,
    color: theme.colors[color],
    [':not([value=""])']: {
      boxShadow: 'none',
      borderColor: `${theme.colors.blueHaze}`,
    },
    [':hover']: {
      boxShadow: 'none',
      borderColor: `${theme.colors.blueHaze}`,
      backgroundColor: `${theme.colors.webWhite}`,
    },
    [':focus']: {
      boxShadow: '0 2px 6px 0 rgba(41, 50, 70, 0.4)',
      borderColor: `${theme.colors.lightGray}`,
      backgroundColor: `${theme.colors.white}`,
    },
  }),
  ifProp('disabled', ({ theme }: any) => ({
    border: `1px solid ${theme.colors.blueHaze}`,
    color: `${theme.colors.blueHaze}`,
  })),
  ifProp('error', ({ theme }: any) => ({
    borderColor: `${theme.colors.red}`,
    [':hover']: {
      borderColor: `${theme.colors.red}`,
    },
    [':focus']: {
      borderColor: `${theme.colors.red}`,
    },
  })),
  ifProp('warning', ({ theme }: any) => ({
    borderColor: `${theme.colors.orange}`,
    [':hover']: {
      borderColor: `${theme.colors.orange}`,
    },
    [':focus']: {
      borderColor: `${theme.colors.orange}`,
    },
  })),
  ifProp('transparent', {
    backgroundColor: 'transparent',
    border: 'none',
    [':hover']: {
      backgroundColor: 'transparent',
      border: 'none',
    },
    [':focus']: {
      backgroundColor: 'transparent',
      border: 'none',
    },
  })
)

const Input = ({
  id,
  type,
  disabled,
  value,
  placeholder,
  readOnly,
  onChange,
  onKeyPress,
  onEnter,
  ...props
}: InputProps) =>
  createElement(
    Wrapper,
    {},
    createElement(InputElement, {
      id,
      type,
      disabled,
      value,
      placeholder,
      readOnly,
      onChange: ({ target }) => onChange(target.value),
      onKeyPress: event => {
        if (event.key === 'Enter' && onEnter) {
          onEnter()
        }

        if (onKeyPress) {
          onKeyPress(event)
        }
      },
      ...props,
    })
  )

Input.defaultProps = {
  color: 'blueBayoux',
  borderColor: 'lightGray',
  onChange: () => {},
}

export default Input
