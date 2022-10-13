import React from 'react'

import { Icon, Logo, Wrapper } from './styles'

const Header = () => {
  return (
    <Wrapper>
      <Icon href="#">
        <img
          src="/icons/navigation-icon.svg"
          height="20"
          width="20"
          alt="navigation icon"
        />
      </Icon>
      <Logo>
        <img src="/images/logo_toodoo.svg" width="120" alt="toodoo logo" />
      </Logo>
    </Wrapper>
  )
}

export default Header
