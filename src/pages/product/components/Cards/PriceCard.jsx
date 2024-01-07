import React from 'react';
import {
    Grid, InputAdornment, TextField, Typography, Box,
} from '@mui/material';
import PageCard from '../../../../components/PageCard/PageCard';
import { dateFormat } from '../../../../utils/dateFormat';

export default function PriceCard({ skeleton, price = 0, priceHistory }) {
    return (
        <PageCard title="Price" skeleton={skeleton}>
            <Grid container spacing={2} marginBottom={1}>
                <Grid item xs={12}>
                    <TextField
                        id="price"
                        value={parseInt(price, 10).toFixed(2)}
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
                    />
                    <Typography variant="subtitle2">
                        history:
                    </Typography>
                    {priceHistory?.map((item) => (
                        <Box key={item.price} display="flex" justifyContent="space-between">
                            <span>
                                ${Number(item.price).toFixed(2)}
                            </span>
                            <span>
                                {dateFormat(item.createdISO, 'DD.MM.YY')}
                            </span>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </PageCard>
    );
}
