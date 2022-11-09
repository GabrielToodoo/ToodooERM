import React, { InputHTMLAttributes, useState } from 'react'

import { InputContainer, InputElement } from './styles'

interface IButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  icon?: React.ComponentType
  registerFunction: any
  labelStyle: any
  error?: boolean
  success?: boolean
}

const Input: React.FC<IButtonProps> = ({
  label,
  registerFunction,
  type,
  labelStyle,
  ...props
}) => {
  const [hidden, setHidden] = useState(true)

  return (
    <InputContainer style={labelStyle}>
      {label}
      <InputElement type={type} {...props} {...registerFunction} />
      {type === 'password' && (
        <a onClick={() => setHidden(!hidden)}>
          <img
            src={hidden ? '/icons/hidden-icon.svg' : '/icons/visible-icon.svg'}
          />
        </a>
      )}
    </InputContainer>
  )
}

export default Input
