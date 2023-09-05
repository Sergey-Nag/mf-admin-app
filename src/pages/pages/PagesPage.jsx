import React from 'react';
import { Box, Typography } from '@mui/material';
import useCommonStyles from '../../hooks/useCommonStyles/useCommonStyles';

function PagesPage() {
    const { classes } = useCommonStyles();
    return (
        <Box className={classes.page}>
            <Typography variant="h1" color="primary">Pages</Typography>
        </Box>
    );
}

export default PagesPage;
