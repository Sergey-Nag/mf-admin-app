import { Box, Typography } from '@mui/material';
import React from 'react';
import cx from 'classnames';
import useCommonStyles from '../../hooks/useCommonStyles/useCommonStyles';

function DashboardPage() {
    const { classes } = useCommonStyles();
    return (
        <Box className={cx(classes.page, classes.pageColumn)}>
            <Typography variant="h1" color="primary">Dashboard</Typography>
        </Box>
    );
}

export default DashboardPage;
