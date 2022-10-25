import React from 'react'

import { Container } from './styles'

export enum BadgeType {
  ERROR,
  SUCCESS,
  WARNING
}

interface BadgeProps {
  type: BadgeType
  children: any
}

const Badge: React.FC<BadgeProps> = ({ type, children }) => {
  return <Container type={type}>{children}</Container>
}

export default Badge
