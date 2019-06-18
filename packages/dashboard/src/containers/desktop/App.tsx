import React from 'react'
import { Column, Layout } from '@ui/layout'
import Header from '../../components/desktop/Header'
import Footer from '../../components/desktop/Footer'

const App = ({ children }) => (
  <Column fill>
    <Header />
    <Layout grow={1}>{children}</Layout>
    <Footer />
  </Column>
)

export default App
