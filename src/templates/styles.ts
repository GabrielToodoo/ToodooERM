import styled, { css } from 'styled-components'

import theme from '../styles/theme'

interface IDashBoardContainer {
  loading?: boolean
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  height: 100vh;
`

export const DashboardContainer = styled.section<IDashBoardContainer>`
  flex: 1;
  background: ${theme.colors.dashboardBg};
  padding: 48px 72px;
  overflow: auto;

  ${props =>
    props.loading &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`
