import styled from 'styled-components'

import theme from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(22, 22, 32, 0.15),
    0px 0px 2px rgba(22, 22, 32, 0.12), 0px 0px 1px rgba(22, 22, 32, 0.04);
  border-radius: 5px;
  flex: 1;

  .table-wrapper {
    height: 600px;
    overflow-y: scroll;
  }

  th {
    padding: 14px 0px 16px 0px;

    &:first-child {
      padding-left: 32px;
    }
  }

  td {
    padding: 24px 0px;
  }
`

export const TableHeader = styled.thead`
  width: 100%;
  background: ${theme.colors.primary500};
  color: white;
`

export const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0px 32px;

  input {
    border: none;
    margin-left: 10px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 208px;
    svg {
      margin-right: 8px;
    }
  }
`
