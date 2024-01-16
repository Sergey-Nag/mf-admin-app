import { Add } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import DataGrid from '../../components/DataGrid/DataGrid';
import Page from '../../components/Page/Page';
import { useProductsColumn } from './hooks/useProductsColumn';
import { useProductsData } from './hooks/useProductsData';

function ProductsPage() {
    const { colDefs } = useProductsColumn();
    const {
        products, totalItems, loading, pagination, page,
        handlePaginationChange,
        handleItemsPerPageChange,
    } = useProductsData();

    return (
        <Page
            title="Products"
            rightControls={(
                <Button
                    variant="contained"
                    startIcon={<Add />}
                    to="new"
                    LinkComponent={Link}
                    disableElevation
                >
                    Add
                </Button>
            )}
        >
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
