import styled from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Background = styled.div`
  color: ${theme.colors.primary600};
  background: linear-gradient(
    150.96deg,
    #fafbff 51.64%,
    rgba(250, 251, 255, 0) 108.8%
  );
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Description = styled.div`
  max-width: 400px;
  text-align: center;

  h3 {
    margin-top: 50px;
    font-weight: 600;
  }

  p {
    margin-top: 8px;
    color: #7b83b4;
  }
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
