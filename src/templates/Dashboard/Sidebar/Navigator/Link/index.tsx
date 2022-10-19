import React from 'react'

import NextLink from 'next/link'

import { Wrapper } from './styles'
import { useRouter } from 'next/router'

type Props = {
  children: string
  path: string

  icon: JSX.Element
}

const Link = ({ path, children, icon }: Props) => {
  const router = useRouter()

  return (
    <NextLink href={path} passHref>
      <Wrapper active={router.pathname === path}>
        <span>{icon}</span>
        {children}
      </Wrapper>
    </NextLink>
  )
}

export default Link
