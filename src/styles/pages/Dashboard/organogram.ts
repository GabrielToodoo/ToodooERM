import styled from 'styled-components'

import theme from '../../theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const OptionsContainer = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 40px;

  li {
    display: inline-block;

    padding: 8px 5px;

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

export const OrganogramContainer = styled.div.attrs({
  className: 'rounded bg-white'
})`
  box-shadow: 0px 2px 4px rgba(22, 22, 32, 0.15),
    0px 0px 2px rgba(22, 22, 32, 0.12), 0px 0px 1px rgba(22, 22, 32, 0.04);
  padding: 24px 32px;
  flex: 1;
`
