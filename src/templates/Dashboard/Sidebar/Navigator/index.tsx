import React from 'react'

import { Wrapper } from './styles'

import { links } from './links'
import Link from './Link'

const Navigator = () => {
  return (
    <Wrapper>
      {links.map(link => {
        if (link.childrens) {
          return <div />
        }

        return (
          <Link key={link.name} path={link.path} icon={link.icon}>
            {link.name}
          </Link>
        )
      })}
    </Wrapper>
  )
}

export default Navigator
