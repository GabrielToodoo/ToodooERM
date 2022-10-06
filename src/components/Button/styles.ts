import styled from 'styled-components'

import { shade } from 'polished'

import theme from '../../styles/theme'

export const ButtonContainer = styled.button`
  padding: 16px 151px;
  border-radius: 5px;
  background: ${theme.colors.primary400};
  border: none;
  outline: 0;
  color: #ffffff;
  box-shadow: 0px 16px 24px rgba(81, 104, 244, 0.2),
    0px 2px 6px rgba(81, 104, 244, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.04);
  transition: 0.3s;

  &:disabled {
    background: ${theme.colors.gray300};
    box-shadow: none;

    &:hover {
      background: ${shade(0.2, `${theme.colors.gray300}`)};
    }
  }

  &:hover {
    background: ${theme.colors.primary300};
  }

  &.small-shadow {
    box-shadow: 0px 3px 4px rgba(81, 104, 244, 0.2),
      0px 0px 2px rgba(81, 104, 244, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.04) !important;
  }

  &.outline {
    color: ${theme.colors.primary400};
    background: transparent;
    box-shadow: none;
    border: 2px solid ${theme.colors.primary400};

    &:hover {
      border: 2px solid ${theme.colors.primary300};
      color: ${theme.colors.primary300};
      background: transparent;
    }
  }
`
