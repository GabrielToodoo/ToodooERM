import React, { InputHTMLAttributes, useState } from 'react'

import { InputContainer, InputElement } from './styles'

interface IButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  icon?: React.ComponentType
  registerFunction: any
  error?: boolean
  success?: boolean
  hiddenable?: boolean
}

const Input: React.FC<IButtonProps> = ({
  label,
  registerFunction,
  hiddenable,
  type,
  ...props
}) => {
  const [hidden, setHidden] = useState(true)

  return (
    <InputContainer>
      {label}
      <InputElement
        type={hiddenable ? (hidden ? 'password' : 'text') : hidden}
        {...props}
        {...registerFunction}
      />
      {hiddenable && (
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
