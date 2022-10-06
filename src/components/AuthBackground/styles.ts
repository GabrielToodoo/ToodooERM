import styled from 'styled-components'

import theme from '../../styles/theme'

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
