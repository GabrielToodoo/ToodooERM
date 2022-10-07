import React, { InputHTMLAttributes } from 'react'

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
  return (
    <InputContainer>
      {label}
      <input {...props} {...registerFunction} />
    </InputContainer>
  )
}

export default Input
