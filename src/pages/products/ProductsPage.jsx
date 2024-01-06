import React from 'react';
import { Grid } from '@mui/material';
import Page from '../../components/Page/Page';
import DataGrid from '../../components/DataGrid/DataGrid';
import ImageCellRenderer from '../../components/DataGrid/cell-renderers/ImageCellRenderer/ImageCellRenderer';
import { useProductsData } from './hooks/useProductsData';

function ProductsPage() {
    const { products, loading } = useProductsData();
    const colDefs = [
        {
            field: 'photo', headerName: 'Photo', width: 150, cellRenderer: ImageCellRenderer,
        },
        { field: 'name', headerName: 'Name' },
        { field: 'price', headerName: 'Price' },
        { field: 'categories', headerName: 'Categories' },
        { field: 'available', headerName: 'Available' },
    ];
    console.log(products, loading);
    const rowData = [];

    return (
        <Page title="Products">
            <Grid item xs={12}>
                <DataGrid
                    colDefs={colDefs}
                    rowData={rowData}
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
