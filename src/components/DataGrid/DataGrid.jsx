import React from 'react';
import { tss } from 'tss-react/mui';
import DataGridBody from './components/DataGridBody/DataGridBody';
import DataGridFooter from './components/DataGridFooter/DataGridFooter';
import DataGridHeader from './components/DataGridHeader/DataGridHeader';
import useDataGrid from './hooks/useDataGrid';

const useStyles = tss.create(() => ({
    dataGrid: {
        width: '100%',
        borderCollapse: 'collapse',
    },
}));

function DataGrid({
    rowData, colDefs, onSelectionChanged, pagination, onPaginationChanged, onRowsPerPageChange,
}) {
    const { classes } = useStyles();
    const {
        rows,
        selected,
        handleAllSelectedChanged,
        handleSelectionChanged,
    } = useDataGrid({ rowData, colDefs, onSelectionChanged });

    return (
        <div>
            <table className={classes.dataGrid}>
                <DataGridHeader
                    colDefs={colDefs}
                    allSelected={selected.length === rows.length}
                    onSelectionChanged={handleAllSelectedChanged}
                />
                <DataGridBody
                    rows={rows}
                    selected={selected}
                    onSelectionChanged={handleSelectionChanged}
                />
            </table>
            <DataGridFooter
                pagination={pagination}
                onPaginationChanged={onPaginationChanged}
                onRowsPerPageChange={onRowsPerPageChange}
            />
        </div>
    );
}

export default DataGrid;
