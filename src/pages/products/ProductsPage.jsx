import React from 'react';
import { Grid } from '@mui/material';
import Page from '../../components/Page/Page';
import DataGrid from '../../components/DataGrid/DataGrid';
import { useProductsData } from './hooks/useProductsData';
import { useProductsColumn } from './hooks/useProductsColumn';

function ProductsPage() {
    const { products, loading } = useProductsData();
    const { colDefs } = useProductsColumn();
    console.log(products, loading);

    return (
        <Page title="Products">
            <Grid item xs={12}>
                <DataGrid
                    colDefs={colDefs}
                    rowData={products}
                    onSelectionChanged={(rows) => console.log(rows)}
                    pagination={{
                        page: 0,
                        rowsPerPage: 5,
                        count: products?.length || 0,
                        rowsPerPageOptions: [5, 10, 20],
                    }}
                    onRowsPerPageChange={console.log}
                    onPaginationChanged={console.log}
                    loading={loading}
                />
            </Grid>
        </Page>
    );
}

export default ProductsPage;
