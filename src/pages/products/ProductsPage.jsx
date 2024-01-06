import React from 'react';
import { Grid } from '@mui/material';
import Page from '../../components/Page/Page';
import DataGrid from '../../components/DataGrid/DataGrid';
import { useProductsData } from './hooks/useProductsData';
import { useProductsColumn } from './hooks/useProductsColumn';

function ProductsPage() {
    const { colDefs } = useProductsColumn();
    const {
        products, totalItems, loading, pagination, page,
        handlePaginationChange,
        handleItemsPerPageChange,
    } = useProductsData();

    return (
        <Page title="Products">
            <Grid item xs={12}>
                <DataGrid
                    colDefs={colDefs}
                    rowData={products}
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

export default ProductsPage;
