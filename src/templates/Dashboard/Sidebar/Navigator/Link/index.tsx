import React from 'react'

import NextLink from 'next/link'

import { Wrapper } from './styles'

type Props = {
  children: string
  path: string

  icon: JSX.Element
}

const Link = ({ path, children, icon }: Props) => {
  return (
    <NextLink href={path} passHref>
      <Wrapper>
        <span>{icon}</span>
        {children}
      </Wrapper>
    </NextLink>
  )
}

export default Link
