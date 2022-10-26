import styled from 'styled-components'

import theme from '../../styles/theme'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 2px 4px rgba(22, 22, 32, 0.15),
    0px 0px 2px rgba(22, 22, 32, 0.12), 0px 0px 1px rgba(22, 22, 32, 0.04);
  border-radius: 5px;
`

export const TableWrapper = styled.div`
  width: 100%;
  height: 80%;
`

export const Table = styled.table`
  width: 100%;
  font-size: 14px;
  line-height: 16px;

  b {
    font-weight: 600;

    color: ${theme.colors.gray500};
  }
`

export const TableHead = styled.thead`
  width: 100%;
  height: 48px;
  background: ${theme.colors.primary500};
  color: white;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  svg {
    margin-left: 10px;
  }
`

export const TableBody = styled.tbody`
  display: block; /* to enable vertical scrolling */
  max-height: 500px; /* e.g. */
  overflow-y: scroll;
`

export const TableData = styled.td`
  padding: 24px 32px;
  height: 64px;
`

export const TableRow = styled.tr`
  padding: 0px 20px;
  display: table; /* display purpose; th's border */
  width: 100%;
  box-sizing: border-box;
`

export const TableHeader = styled.th`
  padding: 24px 32px;
`

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0px 32px;

  input {
    border: none;
    margin-left: 10px;
    background-color: inherit;
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
