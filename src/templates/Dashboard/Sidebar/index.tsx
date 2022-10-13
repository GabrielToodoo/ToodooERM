import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navigator from './Navigator'
import { Wrapper } from './styles'

const Sidebar = () => {
  return (
    <Wrapper>
      <Header />
      <Navigator />
      <Footer />
    </Wrapper>
  )
}

export default Sidebar
