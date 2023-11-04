import React from 'react';
import { Grid } from '@mui/material';
import Page from '../../components/Page/Page';

import DataGridCOPY from '../../components/DataGrid/DataGrid';

function PagesPage() {
    return (
        <Page title="Pages">
            <Grid item xs={12}><DataGridCOPY /></Grid>
        </Page>
    );
}

export default PagesPage;
