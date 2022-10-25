import styled from 'styled-components'

import theme from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 839px;
  background: white;
  box-shadow: 0px 2px 4px rgba(22, 22, 32, 0.15),
    0px 0px 2px rgba(22, 22, 32, 0.12), 0px 0px 1px rgba(22, 22, 32, 0.04);
  border-radius: 5px;

  thead,
  tbody {
    display: block;
  }

  thead {
    padding-left: 30px;
  }

  tbody {
    height: 550px;
    overflow-y: scroll;
  }

  tfoot {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: end;
    padding-top: 30px;
    padding-right: 30px;
  }

  tr {
    display: flex;
  }

  th {
    display: block;
    flex: 1;

    padding: 14px 0px 16px 0px;
  }

  td {
    height: 64px;
    display: flex;
    align-items: center;
    flex: 1;
    padding-left: 30px;
  }

  select {
    width: 60px;
    border: none;
    display: inline-block;
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
