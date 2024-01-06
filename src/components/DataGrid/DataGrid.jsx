import React from 'react';
import { tss } from 'tss-react/mui';
import DataGridBody from './components/DataGridBody/DataGridBody';
import DataGridFooter from './components/DataGridFooter/DataGridFooter';
import DataGridHeader from './components/DataGridHeader/DataGridHeader';
import useDataGrid from './hooks/useDataGrid';
import Loader from '../Loader/Loader';

const useStyles = tss.create(({ theme }) => ({
    dataGrid: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    loaderCell: {
        padding: theme.spacing(10),
    },
}));

function DataGrid({
    rowData,
    colDefs,
    onSelectionChanged,
    pagination,
    onPaginationChanged,
    onRowsPerPageChange,
    loading,
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
                    allSelected={rows.length !== 0 && selected.length === rows.length}
                    onSelectionChanged={handleAllSelectedChanged}
                />
                {loading && (
                    <tbody>
                        <tr>
                            <td colSpan={colDefs.length + 1} className={classes.loaderCell}>
                                <Loader />
                            </td>
                        </tr>
                    </tbody>
                )}
                {!loading && (
                    <DataGridBody
                        rows={rows}
                        selected={selected}
                        onSelectionChanged={handleSelectionChanged}
                    />
                )}
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
