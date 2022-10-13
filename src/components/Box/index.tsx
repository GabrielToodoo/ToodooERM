import React from 'react'

import { Container } from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Box: React.FC<Props> = ({ children }) => {
  return <Container className="rounded bg-white">{children}</Container>
}

export default Box
