import React from 'react'

import { LinkContainer } from './styles'

interface IButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

const LinkButton: React.FC<IButtonProps> = ({ children, ...props }) => {
  return <LinkContainer {...props}>{children}</LinkContainer>
}

export default LinkButton
