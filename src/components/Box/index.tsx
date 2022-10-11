import React from 'react'

import { Container } from './styles'

type Props = {
  children?: JSX.Element
}

const Box: React.FC<Props> = ({ children }) => {
  return <Container className="rounded bg-white">{children}</Container>
}

export default Box
