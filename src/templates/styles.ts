import styled, { css } from 'styled-components'

import theme from '../styles/theme'

interface IDashBoardContainer {
  loading?: boolean
}

export const DashboardContainer = styled.section<IDashBoardContainer>`
  background: ${theme.colors.dashboardBg};
  height: 100vh;
  padding: 48px 72px;

  ${props =>
    props.loading &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`
