import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

function DataGridPagination({
    count = 10, page = 0, rowsPerPage, rowsPerPageOptions, onPaginationChanged, onRowsPerPageChange,
}) {
    return (
        <TablePagination
            component="div"
            count={count}
            page={page}
            rowsPerPageOptions={rowsPerPageOptions}
            rowsPerPage={rowsPerPage}
            onPageChange={(_, nextPage) => onPaginationChanged && onPaginationChanged(nextPage)}
            onRowsPerPageChange={(e) => onRowsPerPageChange && onRowsPerPageChange(e.target.value)}
        />
    );
}

export default DataGridPagination;
