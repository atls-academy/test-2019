import React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@ui/theme'
import { Column, Layout } from '../index'

expect.addSnapshotSerializer(serializer)

describe('Layout', () => {
  describe('column snapshot', () => {
    it('should match latest column render snapshot', () => {
      const column = renderer
        .create(
          <ThemeProvider>
            <Column />
          </ThemeProvider>
        )
        .toJSON()

      expect(column).toMatchSnapshot()
    })

    it('should match latest column fill render snapshot', () => {
      const column = renderer
        .create(
          <ThemeProvider>
            <Column fill />
          </ThemeProvider>
        )
        .toJSON()

      expect(column).toMatchSnapshot()
    })
  })

  describe('layout snapshot', () => {
    it('should match latest layout render snapshot', () => {
      const layout = renderer
        .create(
          <ThemeProvider>
            <Layout
              justify='center'
              align='center'
              basis='xl'
              grow={1}
              shrink={1}
            />
          </ThemeProvider>
        )
        .toJSON()

      expect(layout).toMatchSnapshot()
    })
  })
})
