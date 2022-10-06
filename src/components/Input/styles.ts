import styled from 'styled-components'

import theme from '../../styles/theme'

export const InputContainer = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${theme.colors.gray500};

  input {
    display: block;
    width: 100%;
    padding: 16px;

    border: 1.5px solid ${theme.colors.gray200};

    border-radius: 5px;

    transition: 0.3s;

    margin-top: 8px;

    &::placeholder {
      color: ${theme.colors.gray300};
    }

    &:hover {
      border-color: ${theme.colors.gray300};
    }

    &.active {
      border-color: ${theme.colors.primary400};
    }

    &:disabled {
      border: 1.5px solid ${theme.colors.gray300};
      background: ${theme.colors.gray200};
    }

    &.error {
      border: 1.5px solid ${theme.colors.colorError};
    }

    &.success {
      border: 1.5px solid ${theme.colors.colorSuccess};
    }
  }
`
