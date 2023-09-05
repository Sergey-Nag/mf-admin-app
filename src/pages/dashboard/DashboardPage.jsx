import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from '../../styles/common.css';

function DashboardPage() {
    return (
        <Box className={styles['all-pages']}>
            <Typography variant="h1" color="primary">Dashboard</Typography>
        </Box>
    );
}

export default DashboardPage;
