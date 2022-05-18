import React, {useMemo} from "react";
import {useTable, useSortBy, useFilters, usePagination} from 'react-table'
import {Columns} from './Columns'
import './table.css'

const BasicTable = (props) => {
  const data = props.data

  const columns = useMemo(() => Columns, [])

  const tableInstance = useTable({
      columns,
      data,
    }, 
    useFilters,
    useSortBy,
    usePagination)

  const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   page,
   nextPage,
   previousPage,
   canNextPage,
   canPreviousPage,
   pageOptions,
   setPageSize,
   state,
   prepareRow,
  } = tableInstance

  const { pageIndex, pageSize } = state

  return (
    <div className='tableContainer'>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
              <span className="arrow">
              {column.isSorted ? (column.isSortedDesc ? '▲' : '▼') : ' '}
              </span> 
            <div>{column.canFilter ? column.render('Filter') : null}</div>
            </th>))} 
          </tr>))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {
          page.map(row => {prepareRow(row)
            return(<tr {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>})}
            </tr>)})
        }
        </tbody>
      </table>
    <div>
      <span className="page">
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
      <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
        {
          [10, 28, 56].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))
        }
      </select>
      <button onClick={() => previousPage()} disabled={!canPreviousPage} className='pageBtn'>Previous</button>
      <button onClick={() => nextPage()} disabled={!canNextPage} className='pageBtn'>Next</button>
    </div>
    </div>
  )
}

export default BasicTable

