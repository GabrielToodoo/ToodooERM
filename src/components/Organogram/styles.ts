import styled from 'styled-components'

import theme from '../../styles/theme'

export const StyledNode = styled.div`
  display: inline-flex !important;
  padding: 10px 40px 11px 16px;
  border-radius: 5px;
  display: inline-block;
  border: 0.5px solid ${theme.colors.primary500};
  background: ${theme.colors.primary50};

  img {
    border: 1px solid white;
    border-radius: 50%;
    filter: drop-shadow(0px 2px 4px rgba(22, 22, 32, 0.15))
      drop-shadow(0px 0px 2px rgba(22, 22, 32, 0.12))
      drop-shadow(0px 0px 1px rgba(22, 22, 32, 0.04));
  }

  div {
    text-align: start;
    margin-left: 9px;

    color: ${theme.colors.primary500};
  }
`
