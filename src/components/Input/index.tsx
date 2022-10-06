import React, { InputHTMLAttributes, useRef } from 'react'

import { InputContainer } from './styles'

interface IButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  icon?: React.ComponentType
}

const Input: React.FC<IButtonProps> = ({ label, name, ...props }) => {
  const inputRef = useRef(null)

  return (
    <InputContainer>
      {label}
      <input ref={inputRef} {...props} />
    </InputContainer>
  )
}

export default Input
