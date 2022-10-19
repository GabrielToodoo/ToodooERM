import styled from 'styled-components'

export const Wrapper = styled.nav`
  flex: 1;
  overflow: auto;

  > a:nth-child(1) {
    margin-bottom: 35px;
  }

  div:first-child {
    background: red;
  }

  > div:last-child {
    border-top: 0;
  }
`
