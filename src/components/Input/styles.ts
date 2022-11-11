import styled from 'styled-components'

import theme from '../../styles/theme'

interface InputProps {
  errorLabel?: boolean
  success?: boolean
}

export const InputContainer = styled.label`
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${theme.colors.gray500};

  img {
    position: absolute;
    right: 20px;
    top: 40px;
    cursor: pointer;
  }

  p {
    position: absolute;
    font-size: 11px;
    color: ${theme.colors.colorError};
    margin-top: 4px;
  }
`

export const InputElement = styled.input<InputProps>`
  display: block;
  width: 100%;
  padding: 16px;

  font-size: 14px;

  border: 1.5px solid
    ${props =>
      props.errorLabel
        ? theme.colors.colorError
        : props.success
        ? theme.colors.primary400
        : theme.colors.gray200};

  border-radius: 5px;

  transition: 0.3s;

  margin-top: 8px;

  &::placeholder {
    color: ${theme.colors.gray300};
  }

  &:hover {
    border-color: ${props =>
      props.errorLabel
        ? theme.colors.colorError
        : props.success
        ? theme.colors.primary400
        : theme.colors.gray300};
  }

  &.active {
    border-color: ${theme.colors.primary400};
  }

  &:focus {
    border-color: ${theme.colors.primary400};
  }

  &:disabled {
    border: 1.5px solid ${theme.colors.gray300};
    background: ${theme.colors.gray200};
  }
`
