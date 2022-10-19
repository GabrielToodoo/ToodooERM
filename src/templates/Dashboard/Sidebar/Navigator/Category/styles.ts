import styled from 'styled-components'

import theme from '../../../../../styles/theme'

export const Wrapper = styled.div`
  border-top: 1px solid ${theme.colors.gray100};
  border-bottom: 1px solid ${theme.colors.gray100};
`

export const CategoryHeader = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 32px;
  height: 48px;

  font-weight: 700;
  font-size: 10px;
  color: ${theme.colors.gray400};
`
