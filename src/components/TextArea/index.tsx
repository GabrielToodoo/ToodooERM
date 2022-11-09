import React, { InputHTMLAttributes } from 'react'

import { TextAreaInput, TextAreaWrapper } from './styles'

interface ISelectProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label: string
  rows?: any
  defaultText?: string
}

const TextArea: React.FC<ISelectProps> = ({
  id,
  label,
  defaultText,
  ...props
}) => {
  return (
    <TextAreaWrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <TextAreaInput {...props}>{defaultText}</TextAreaInput>
    </TextAreaWrapper>
  )
}

export default TextArea
