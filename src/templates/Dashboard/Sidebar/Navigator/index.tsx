import React, { useContext } from 'react'

import { Wrapper } from './styles'

import { links } from './links'
import Category from './Category'
import Link from './Link'

import { AuthContext } from '../../../../contexts/AuthContext'

const Navigator = () => {
  const { user } = useContext(AuthContext)

  return (
    <Wrapper>
      {links
        .filter(link => link.level.includes(user.profile))
        .map(link => {
          if (link.childrens) {
            return <Category key={link.name} data={link} />
          }

          return (
            <Link key={link.name} path={link.path!} icon={link.icon}>
              {link.name}
            </Link>
          )
        })}
    </Wrapper>
  )
}

export default Navigator
