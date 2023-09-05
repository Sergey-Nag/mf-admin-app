import React from 'react';
import { Box, Typography } from '@mui/material';
import useCommonStyles from '../../hooks/useCommonStyles/useCommonStyles';

function ProductsPage() {
    const { classes } = useCommonStyles();
    return (
        <Box className={classes.page}>
            <Typography variant="h1" color="primary">Products</Typography>
        </Box>
    );
}

export default ProductsPage;
