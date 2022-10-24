import styled from 'styled-components'

import theme from '../../styles/theme'

import { shade } from 'polished'

export const LinkContainer = styled.a`
  background: ${theme.colors.primary400};
  color: white;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  filter: drop-shadow(0px 3px 4px rgba(81, 104, 244, 0.2))
    drop-shadow(0px 0px 2px rgba(81, 104, 244, 0.12))
    drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));

  &:hover {
    color: white;
  }
`
