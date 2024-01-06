import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

function DataGridPagination() {
    return (
        <TablePagination
            component="div"
            count={100}
            page={1}
            rowsPerPage={10}
            onPageChange={() => { }}
        />
    );
}

export default DataGridPagination;
