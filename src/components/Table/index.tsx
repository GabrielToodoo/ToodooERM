import React, { useState } from 'react'
import LinkButton from '../Link'

import { Container, SearchBox, TableHeader } from './styles'

interface Column {
  key: string
  name: string
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  mt?: string
  columns: Column[]
  buttonLabel: string
  icon?: JSX.Element
  data: object[]
  searchIndex: string
}

const Table: React.FC<Props> = ({
  mt,
  columns,
  buttonLabel,
  icon,
  data,
  searchIndex
}) => {
  const [search, setSearch] = useState('')
  const [resultsPerPage, setResultsPerPage] = useState(10)

  return (
    <Container style={{ marginTop: mt }}>
      <SearchBox>
        <div>
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
            onChange={event => setSearch(event.target.value)}
          />
        </div>
        <LinkButton href="#">
          {icon}
          {buttonLabel}
        </LinkButton>
      </SearchBox>
      <div className="table-responsive">
        <table className="table">
          <TableHeader>
            <tr>
              {columns.map(column => {
                return (
                  <th>
                    {column.name}
                    <span className="vacation-th-icon ms-1">
                      <i className="bi bi-caret-down-fill"></i>
                    </span>
                  </th>
                )
              })}
            </tr>
          </TableHeader>
          <tbody>
            {(search.length !== 0
              ? data.filter(object => {
                  type ObjectKey = keyof typeof object
                  const key = searchIndex as ObjectKey
                  return (object[key] as String)
                    .toLowerCase()
                    .includes(search.toLowerCase())
                })
              : data
            )
              .slice(0, resultsPerPage)
              .map(object => {
                return (
                  <tr>
                    {columns.map(column => {
                      type ObjectKey = keyof typeof object
                      const key = column.key as ObjectKey
                      return (
                        <td>{object.hasOwnProperty(key) && object[key]}</td>
                      )
                    })}
                  </tr>
                )
              })}
          </tbody>
          <tfoot>
            <label className="text-muted">
              Registros por página:{' '}
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={event =>
                  setResultsPerPage(Number(event.target.value))
                }
              >
                <option value="10" selected>
                  10
                </option>
                <option value="30">30</option>
                <option value="50">50</option>
              </select>
            </label>
          </tfoot>
        </table>
      </div>
    </Container>
  )
}

export default Table
