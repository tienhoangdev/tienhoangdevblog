import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import PropTypes from 'prop-types'

function CustomTable({ data, columns }) {
  const [sortField, setSortField] = useState('')
  const [sortDirection, setSortDirection] = useState('asc')
  const [currentPage, setCurrentPage] = useState(1)

  const handleSort = (column, sortDirection) => {
    setSortField(column.selector)
    setSortDirection(sortDirection)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        sortField={sortField}
        sortDirection={sortDirection}
        onSort={handleSort}
        pagination
        paginationTotalRows={data.length}
        paginationPerPage={10}
        paginationDefaultPage={currentPage}
        onChangePage={handlePageChange}
      />
    </div>
  )
}

CustomTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
}

export default CustomTable
