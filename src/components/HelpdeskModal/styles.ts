import styled from 'styled-components'

import theme from '../../styles/theme'

export const Container = styled.div`
  h5 {
    color: ${theme.colors.primary400};
    margin-bottom: 24px;
  }
`

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 5px;
  max-width: 300px;
  margin: auto;
  margin-top: 40px;
`
