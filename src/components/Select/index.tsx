import React, { HTMLAttributes } from 'react'

import { SelectInput, SelectWrapper } from './styles'

interface ISelectProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  label: string
  options: string[]
}

const Select: React.FC<ISelectProps> = ({ id, label, options, ...props }) => {
  return (
    <SelectWrapper {...props}>
      {label && <label htmlFor={id}>{label}</label>}
      <SelectInput name={id}>
        {options.map(option => {
          return <option value={option.toLowerCase()}>{option}</option>
        })}
      </SelectInput>
    </SelectWrapper>
  )
}

export default Select
