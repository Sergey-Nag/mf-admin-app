import React from 'react';
import { Grid } from '@mui/material';
import Page from '../../components/Page/Page';
// eslint-disable-next-line import/no-named-as-default
import DataGrid from '../../components/DataGrid/DataGrid';

function ProductsPage() {
    return (
        <Page title="Products">
            <Grid item xs={12}>
                <DataGrid />
            </Grid>
        </Page>
    );
}

export default ProductsPage;
