import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../styles/common.css';

function Products() {
    return (
        <Box className={styles['all-pages']}>
            <Typography variant="h1" color="primary">Products</Typography>
        </Box>
    );
}

export default Products;
