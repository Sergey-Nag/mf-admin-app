import React from 'react';
import { tss } from 'tss-react/mui';
import DataGridPagination from '../DataGridPagination/DataGridPagination';
import { DATAGRID_CHECKBOX_COLUMN_WIDTH } from '../../constants';

const useStyles = tss.create(({ theme }) => ({
    gridFooter: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(1),
        background: theme.palette.grey[300],
        height: 50,
        '& .MuiTablePagination-toolbar': {
            minHeight: 50,
            color: theme.palette.grey[700],
        },
    },
    counter: {
        width: DATAGRID_CHECKBOX_COLUMN_WIDTH + 8,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        color: theme.palette.grey[700],
    },
}
));

function DataGridFooter({
    pagination, selectedRows = 0, onPaginationChanged, onRowsPerPageChange,
}) {
    const { classes } = useStyles();
    return (
        <div className={classes.gridFooter}>
            <div className={classes.counter}>
                {selectedRows > 0 && (
                    <span>{selectedRows}</span>
                )}
            </div>
            <DataGridPagination
                {...pagination}
                onPaginationChanged={onPaginationChanged}
                onRowsPerPageChange={onRowsPerPageChange}
            />
        </div>
    );
}

export default DataGridFooter;
