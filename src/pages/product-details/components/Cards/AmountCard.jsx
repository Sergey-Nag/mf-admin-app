import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import PageCard from '../../../../components/PageCard/PageCard';
import FormNumberInput from '../../../../components/FormInputs/FormNumberInput';

export default function AmountCard({
    skeleton,
    amount = 0,
    lowStockAlert = 0,
    shipping = 0,
    setFieldValue,
    onBlur,
}) {
    const available = amount - shipping;

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
                        <FormNumberInput
                            id="lowStockAlert"
                            sx={{ marginLeft: -8 }}
                            value={amount}
                            onChange={(e) => {
                                setFieldValue('stock.amount', +e.target.value);
                            }}
                            onBlur={onBlur}
                        />
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
            <Divider sx={{ marginBottom: 1 }} />
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
            <Divider sx={{ marginBottom: 1 }} />
            <Grid container spacing={2} marginBottom={1}>
                <Grid item xs={9} alignSelf="center">
                    <Typography>
                        Low stock alert:
                    </Typography>
                </Grid>
                <Grid item xs={3} alignSelf="center">
                    <FormNumberInput
                        id="lowStockAlert"
                        sx={{ marginLeft: -8 }}
                        value={lowStockAlert}
                        onChange={(e) => {
                            setFieldValue('stock.lowStockAlert', +e.target.value);
                        }}
                        onBlur={onBlur}
                    />
                </Grid>
            </Grid>
        </PageCard>
    );
}
