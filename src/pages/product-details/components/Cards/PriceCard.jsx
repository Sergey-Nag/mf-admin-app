import React from 'react';
import {
    Grid, InputAdornment, TextField, Typography, Box,
} from '@mui/material';
import PageCard from '../../../../components/PageCard/PageCard';
import { dateFormat } from '../../../../utils/dateFormat';

export default function PriceCard({
    skeleton,
    price = 0,
    priceHistory,
    error,
    setFieldValue,
    onBlur,
}) {
    const history = priceHistory && [...priceHistory]
        .sort((a, b) => new Date(b.createdISO) - new Date(a.createdISO));
    return (
        <PageCard title="Price" skeleton={skeleton}>
            <Grid container spacing={2} marginBottom={1}>
                <Grid item xs={12}>
                    <TextField
                        id="price"
                        value={price}
                        size="small"
                        sx={{
                            '& input': {
                                fontWeight: 'bold',
                            },
                            paddingBottom: 1,
                        }}
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (!Number.isNaN(value)) {
                                setFieldValue('price', e.target.value);
                            }
                        }}
                        onBlur={(e) => {
                            setFieldValue('price', Number(e.target.value).toFixed(2));
                            onBlur(e);
                        }}
                        error={!!error}
                        helperText={error}
                    />
                    <Typography variant="subtitle2">
                        history:
                    </Typography>
                    {history?.map((item) => (
                        <Box key={`${item.price}${item.createdISO}`} display="flex" justifyContent="space-between">
                            <span>
                                ${Number(item.price).toFixed(2)}
                            </span>
                            <span>
                                {dateFormat(item.createdISO, 'DD.MM.YY HH:mm')}
                            </span>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </PageCard>
    );
}
