import React from 'react'

import { ButtonContainer } from './styles'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  loading?: boolean
}

const Button: React.FC<IButtonProps> = ({ children, loading, ...props }) => {
  return (
    <ButtonContainer {...props}>
      {loading ? (
        <div
          className="spinner-border spinner-border-md text-light"
          role="status"
        />
      ) : (
        children
      )}
    </ButtonContainer>
  )
}

export default Button
