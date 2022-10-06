import React, { InputHTMLAttributes, useRef } from 'react'

import { InputContainer } from './styles'

interface IButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  icon?: React.ComponentType
  registerFunction: any
}

const Input: React.FC<IButtonProps> = ({
  label,
  registerFunction,
  ...props
}) => {
  const inputRef = useRef(null)

  return (
    <InputContainer>
      {label}
      <input ref={inputRef} {...props} {...registerFunction} />
    </InputContainer>
  )
}

export default Input
