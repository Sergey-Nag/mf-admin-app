import { Add } from '@mui/icons-material';
import Delete from '@mui/icons-material/Delete';
import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid,
} from '@mui/material';
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
        setSelected,
        deleteProducts,
        selectedAmount,
        setShowDeleteDialog,
        showDeleteDialog,
    } = useProductsData();

    return (
        <Page
            title="Products"
            rightControls={(
                <>
                    <Button
                        variant="outlined"
                        startIcon={<Delete />}
                        color="error"
                        disabled={selectedAmount === 0}
                        onClick={() => setShowDeleteDialog(true)}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<Add />}
                        to="new"
                        LinkComponent={Link}
                        disableElevation
                    >
                        Add
                    </Button>
                </>
            )}
        >
            <Grid item xs={12}>
                <DataGrid
                    colDefs={colDefs}
                    rowData={products}
                    onSelectionChanged={setSelected}
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
            <Dialog open={showDeleteDialog}>
                <DialogTitle>
                    Delete products?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete {selectedAmount} product(s)?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button type="button" onClick={() => setShowDeleteDialog(false)}>Cancel</Button>
                    <Button
                        type="button"
                        onClick={() => {
                            deleteProducts();
                        }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Page>
    );
}

export default ProductsPage;
