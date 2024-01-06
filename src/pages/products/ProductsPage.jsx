import React from 'react';
import { Grid } from '@mui/material';
import Page from '../../components/Page/Page';
import DataGrid from '../../components/DataGrid/DataGrid';
import ImageCellRenderer from '../../components/DataGrid/cell-renderers/ImageCellRenderer/ImageCellRenderer';

function ProductsPage() {
    const colDefs = [
        {
            field: 'photo', headerName: 'Photo', width: 150, cellRenderer: ImageCellRenderer,
        },
        { field: 'name', headerName: 'Name' },
        { field: 'price', headerName: 'Price' },
        { field: 'categories', headerName: 'Categories' },
        { field: 'available', headerName: 'Available' },
    ];

    const rowData = [
        {
            id: 1,
            name: 'Product 1',
            categories: 'Category 1',
            price: 10,
            photo: 'https://picsum.photos/200',
            available: 112,
        },
        {
            id: 2,
            name: 'Product 2',
            categories: 'Category 2',
            price: 20,
            photo: 'https://picsum.photos/200',
            available: 0,
        },
        {
            id: 3,
            name: 'Product 3',
            categories: 'Category 3',
            price: 30,
            photo: 'https://picsum.photos/200',
            available: 3,
        },
        {
            id: 4,
            name: 'Product 3',
            categories: 'Category 3',
            price: 30,
            photo: 'https://picsum.photos/200',
            available: 3,
        },
        {
            id: 5,
            name: 'Product 5',
            categories: 'Category 3',
            price: 30,
            photo: 'https://picsum.photos/200',
            available: 3,
        },
        {
            id: 6,
            name: 'Product 6',
            categories: 'Category 3',
            price: 30,
            photo: 'https://picsum.photos/200',
            available: 3,
        },
        {
            id: 7,
            name: 'Product 7',
            categories: 'Category 3',
            price: 30,
            photo: 'https://picsum.photos/200',
            available: 3,
        },
        {
            id: 8,
            name: 'Product 8',
            categories: 'Category 3',
            price: 30,
            photo: 'https://picsum.photos/200',
            available: 3,
        },
        {
            id: 9,
            name: 'Product 9',
            categories: 'Category 3',
            price: 30,
            photo: 'https://picsum.photos/200',
            available: 3,
        },
        {
            id: 10,
            name: 'Product 10',
            categories: 'Category 3',
            price: 30,
            photo: 'https://picsum.photos/200',
            available: 3,
        },
    ];

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
                        count: rowData.length,
                        rowsPerPageOptions: [5, 10, 20],
                    }}
                    onRowsPerPageChange={console.log}
                    onPaginationChanged={console.log}
                />
            </Grid>
        </Page>
    );
}

export default ProductsPage;
