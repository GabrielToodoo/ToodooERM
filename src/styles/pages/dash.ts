import styled from 'styled-components'

import theme from '../theme'

export const NewsTitle = styled.h5`
  font-size: 12px;
  color: ${theme.colors.primary400};
`

export const BirthdayDetails = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  h5 {
    font-size: 14px;

    color: ${theme.colors.primary600};
    margin: 0;
    padding: 0;
  }

  span {
    font-size: 12px;

    color: ${theme.colors.gray400};
  }
`
