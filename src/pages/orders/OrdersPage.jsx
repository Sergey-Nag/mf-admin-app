import React from 'react';
import { Box, Typography } from '@mui/material';
import useCommonStyles from '../../hooks/useCommonStyles/useCommonStyles';

function OrdersPage() {
    const { classes } = useCommonStyles();
    return (
        <Box className={classes.page}>
            <Typography variant="h1" color="primary">Orders</Typography>
        </Box>
    );
}

export default OrdersPage;
