import styled from 'styled-components'

import theme from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  margin-top: 32px;
`

export const BoxesWrapper = styled.div`
  display: flex;

  h6 {
    color: ${theme.colors.primary400};
  }

  div {
    display: inline-block;
  }

  #personal-data {
    width: 57%;
    margin-right: 24px;
  }

  #about-me {
    flex: 1;
  }
`
