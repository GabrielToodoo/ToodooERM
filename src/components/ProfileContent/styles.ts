import styled from 'styled-components'

import theme from '../../styles/theme'

export const ProfileContentSectionWrapper = styled.div``

export const ProfileContentWrapper = styled.div`
  margin-top: 46px;
`

export const AlertText = styled.span`
  width: 300px;
  height: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.primary400};
  margin-right: 32px;
`

export const ProfileContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    max-width: 200px;
    max-height: 42px;
  }
`

export const OptionsContainer = styled.ul`
  padding: 0;
  margin: 0;

  li {
    display: inline-block;

    padding: 8px 12px;

    font-size: 16px;
    line-height: 24px;
    font-weight: 600;

    margin-left: 20px;

    color: ${theme.colors.gray500};

    cursor: pointer;

    &:first-child {
      margin-left: 0px;
    }
  }

  .active {
    color: ${theme.colors.primary400};
    background: #ebedfa;
    border-bottom: 2px solid ${theme.colors.primary400};
  }
`
