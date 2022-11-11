import styled from 'styled-components'

import theme from '../../styles/theme'

export const Container = styled.form`
  width: 100%;

  margin-top: 32px;

  max-width: 492px;

  form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .password-help {
    font-size: 12px;
    color: ${theme.colors.gray400};
    margin-top: 32px;
  }
`
