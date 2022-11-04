import React from 'react'

import { DatePickerWrapper } from './styles'

interface DatePickerProps {
  label?: string
  placeholder?: string
  registerFunction: any
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  placeholder,
  registerFunction
}) => {
  return (
    <DatePickerWrapper>
      {label && <label htmlFor="startDate">{label}</label>}
      <input
        id="startDate"
        className="form-control"
        placeholder={placeholder}
        type="date"
        {...registerFunction}
      />
      <span id="startDateSelected"></span>
    </DatePickerWrapper>
  )
}

export default DatePicker
