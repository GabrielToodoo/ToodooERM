import React from 'react'

import { Container } from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  mt?: string
}

const Box: React.FC<Props> = ({ children, mt, ...props }) => {
  return (
    <Container
      className="rounded bg-white"
      style={{ marginTop: mt }}
      {...props}
    >
      {children}
    </Container>
  )
}

export default Box
