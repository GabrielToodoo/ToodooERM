import styled from 'styled-components'

import theme from '../../styles/theme'

export const DatePickerWrapper = styled.div`
  label {
    color: ${theme.colors.gray500};
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 8px;
  }

  input {
    box-shadow: none !important;
    &:hover {
      border-color: ${theme.colors.primary400};
    }
  }
`
