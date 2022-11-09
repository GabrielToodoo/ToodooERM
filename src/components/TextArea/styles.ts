import styled from 'styled-components'

import theme from '../../styles/theme'

export const TextAreaInput = styled.textarea`
  width: 100%;
  padding: 16px;
  border: 1.5px solid ${theme.colors.gray200};
  border-radius: 5px;
  transition: 0.3s;

  font-size: 14px;

  min-height: 220px;

  &.active {
    border-color: ${theme.colors.primary400};
  }

  &:focus {
    border-color: ${theme.colors.primary400};
  }
`

export const TextAreaWrapper = styled.div`
  width: 100%;

  label {
    display: block;
    color: ${theme.colors.gray500};
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 8px;
  }
`
