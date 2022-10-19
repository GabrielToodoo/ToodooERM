import React from 'react'

import { Container } from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  mt?: string
}

const Box: React.FC<Props> = ({ children, mt }) => {
  return (
    <Container className="rounded bg-white" style={{ marginTop: mt }}>
      {children}
    </Container>
  )
}

export default Box
