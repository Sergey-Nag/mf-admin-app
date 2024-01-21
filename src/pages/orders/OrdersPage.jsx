import { Grid } from '@mui/material';
import React from 'react';
import DataGrid from '../../components/DataGrid/DataGrid';
import Page from '../../components/Page/Page';
import { useOrdersColumn } from './hooks/useOrdersColumn';
import { useOrdersData } from './hooks/useOrdersData';

function OrdersPage() {
    const { colDefs } = useOrdersColumn();
    const {
        orders, totalItems, loading, pagination, page,
        handlePaginationChange,
        handleItemsPerPageChange,
    } = useOrdersData();

    return (
        <Page
            title="Orders"
        >
            <Grid item xs={12}>
                <DataGrid
                    colDefs={colDefs}
                    rowData={orders}
                    onSelectionChanged={(rows) => console.log(rows)}
                    pagination={{
                        page,
                        rowsPerPage: pagination.amount,
                        count: totalItems,
                        rowsPerPageOptions: [5, 10, 20],
                    }}
                    onRowsPerPageChange={handleItemsPerPageChange}
                    onPaginationChanged={handlePaginationChange}
                    loading={loading}
                />
            </Grid>
        </Page>
    );
}

export default OrdersPage;
