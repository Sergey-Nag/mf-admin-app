import React from 'react';
import { Grid, Typography } from '@mui/material';
import PageCard from '../../../../components/PageCard/PageCard';
import FormNumberInput from '../../../../components/FormInputs/FormNumberInput';

export default function AmountCard({
    skeleton,
    amount = 0,
    lowStockAlert = 0,
    shipping = 0,
    available = 0,
}) {
    return (
        <PageCard title="Amount" skeleton={skeleton}>
            <Grid container spacing={2} marginBottom={1}>
                <Grid item xs={9} alignSelf="center">
                    <Typography>
                        Stock:
                    </Typography>
                </Grid>
                <Grid item xs={3} alignSelf="center">
                    <Typography>
                        {amount}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} marginBottom={1}>
                <Grid item xs={9} alignSelf="center">
                    <Typography>
                        Shipping:
                    </Typography>
                </Grid>
                <Grid item xs={3} alignSelf="center">
                    <Typography>
                        {shipping}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} marginBottom={1}>
                <Grid item xs={9} alignSelf="center">
                    <Typography fontWeight="bold">
                        Available:
                    </Typography>
                </Grid>
                <Grid item xs={3} alignSelf="center">
                    <Typography fontWeight="bold">
                        {available}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} marginBottom={1}>
                <Grid item xs={9} alignSelf="center">
                    <Typography fontWeight="bold">
                        Low stock alert:
                    </Typography>
                </Grid>
                <Grid item xs={3} alignSelf="center">
                    <FormNumberInput sx={{ marginLeft: -8 }} value={lowStockAlert} readOnly />
                </Grid>
            </Grid>
        </PageCard>
    );
}
