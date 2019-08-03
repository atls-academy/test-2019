import React from 'react'
import { Column, Layout } from '@ui/layout'
import Footer from '../../components/desktop/Footer'
import Header from './Header'

const App = ({ children }) => (
  <Column fill>
    <Header />
    <Layout grow={1}>{children}</Layout>
    <Footer />
  </Column>
)

export default App
