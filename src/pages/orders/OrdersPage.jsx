import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../../styles/common.css';

function OrdersPage() {
    return (
        <Box className={styles['all-pages']}>
            <Typography variant="h1" color="primary">Orders</Typography>
        </Box>
    );
}

export default OrdersPage;
