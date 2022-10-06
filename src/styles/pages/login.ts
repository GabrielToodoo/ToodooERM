import styled from 'styled-components'

import theme from '../theme'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const FormLogin = styled.div`
  display: flex;
  width: 100%;
  padding: 6.87rem 7.31rem 6.62rem 7rem;
  background: #ffffff;

  @media (min-width: 992px) {
    max-width: 700px;
  }
`

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
  }
`

export const HelpText = styled.p`
  color: ${theme.colors.gray400};

  a {
    color: ${theme.colors.primary400};
  }
`
