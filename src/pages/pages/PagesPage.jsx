import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../../styles/common.css';

function PagesPage() {
    return (
        <Box className={styles['all-pages']}>
            <Typography variant="h1" color="primary">Pages</Typography>
        </Box>
    );
}

export default PagesPage;
