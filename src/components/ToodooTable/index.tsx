import React, { useEffect, useMemo, useState } from 'react'
import {
  Column,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useTable
} from 'react-table'
import LinkButton from '../Link'

import {
  Wrapper,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
  SearchWrapper,
  TableWrapper
} from './styles'

interface ButtonProps {
  buttonLabel: string
  buttonIcon?: JSX.Element
}

interface ToodooTableProps {
  columns: Column<object>[]
  data: any
  button?: ButtonProps
  search?: boolean
}

const ToodooTable: React.FC<ToodooTableProps> = ({
  columns,
  data,
  button,
  search
}) => {
  const tableInstance = useTable(
    {
      columns: columns,
      data: data
    },
    useGlobalFilter,
    useSortBy
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    globalFilter,
    preGlobalFilteredRows,
    setGlobalFilter
  } = tableInstance

  const count = preGlobalFilteredRows.length
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 300)

  return (
    <Wrapper>
      <SearchWrapper>
        <div>
          {search && (
            <>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99949 4.94204e-08C6.72625 0.000182341 5.47144 0.304242 4.33934 0.88691C3.20725 1.46958 2.23056 2.31402 1.49046 3.35007C0.750356 4.38612 0.268211 5.58384 0.0840929 6.8437C-0.100025 8.10356 0.0192024 9.38916 0.431866 10.5937C0.84453 11.7982 1.53871 12.8868 2.45672 13.7691C3.37473 14.6514 4.49005 15.3018 5.70999 15.6663C6.92993 16.0309 8.21925 16.099 9.47081 15.865C10.7224 15.6311 11.9 15.1018 12.9059 14.3211L18.2923 19.7096C18.4801 19.8971 18.7347 20.0023 19.0001 20.0021C19.2655 20.002 19.5199 19.8963 19.7074 19.7086C19.8949 19.5208 20.0002 19.2662 20 19.0008C19.9998 18.7354 19.8942 18.481 19.7064 18.2934L14.32 12.907C15.2382 11.7244 15.8061 10.3078 15.9591 8.81846C16.1122 7.32909 15.8442 5.82665 15.1857 4.482C14.5273 3.13735 13.5047 2.00445 12.2343 1.21212C10.9639 0.419792 9.49671 -0.000166334 7.99949 4.94204e-08ZM1.99901 8.00063C1.99901 6.40921 2.63121 4.88296 3.75651 3.75766C4.88182 2.63235 6.40807 2.00016 7.99949 2.00016C9.59092 2.00016 11.1172 2.63235 12.2425 3.75766C13.3678 4.88296 14 6.40921 14 8.00063C14 9.59206 13.3678 11.1183 12.2425 12.2436C11.1172 13.3689 9.59092 14.0011 7.99949 14.0011C6.40807 14.0011 4.88182 13.3689 3.75651 12.2436C2.63121 11.1183 1.99901 9.59206 1.99901 8.00063Z"
                  fill="#494952"
                />
              </svg>
              <input
                type="text"
                name="Search"
                value={value || ''}
                onChange={e => {
                  setValue(e.target.value)
                  onChange(e.target.value)
                }}
              />
            </>
          )}
        </div>
        {button && (
          <LinkButton href="#">
            {button.buttonIcon && button.buttonIcon}
            {button.buttonLabel}
          </LinkButton>
        )}
      </SearchWrapper>
      <TableWrapper>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <TableHeader
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render('Header')}
                    {column.isSortedDesc ? (
                      <svg
                        width="6"
                        height="4"
                        viewBox="0 0 6 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.61074 3.69463L0.129028 0.857941C-0.163852 0.524182 0.0741776 1.90271e-07 0.518672 1.90271e-07H5.4821C5.58158 -8.51004e-05 5.67897 0.0285055 5.76262 0.0823483C5.84627 0.136191 5.91262 0.213004 5.95374 0.303587C5.99485 0.394171 6.00898 0.494686 5.99444 0.593096C5.9799 0.691505 5.9373 0.783637 5.87174 0.858458L3.39003 3.69411C3.34146 3.74969 3.28156 3.79424 3.21436 3.82476C3.14715 3.85528 3.0742 3.87107 3.00039 3.87107C2.92658 3.87107 2.85362 3.85528 2.78641 3.82476C2.71921 3.79424 2.65931 3.74969 2.61074 3.69411V3.69463Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="6"
                        height="4"
                        viewBox="0 0 6 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.61074 0.176463L0.129028 3.01315C-0.163852 3.34691 0.0741776 3.87109 0.518672 3.87109H5.4821C5.58158 3.87118 5.67897 3.84259 5.76262 3.78875C5.84627 3.7349 5.91262 3.65809 5.95374 3.56751C5.99485 3.47692 6.00898 3.37641 5.99444 3.278C5.9799 3.17959 5.9373 3.08746 5.87174 3.01264L3.39003 0.176981C3.34146 0.121402 3.28156 0.0768558 3.21436 0.0463343C3.14715 0.0158128 3.0742 2.18375e-05 3.00039 2.18375e-05C2.92658 2.18375e-05 2.85362 0.0158128 2.78641 0.0463343C2.71921 0.0768558 2.65931 0.121402 2.61074 0.176981V0.176463Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </TableHeader>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row, idx) => {
              prepareRow(row)

              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell, idx) => (
                    <TableData {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableData>
                  ))}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableWrapper>
    </Wrapper>
  )
}

export default ToodooTable
