import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '../styles/common.css';

function Users() {
    return (
        <Box className={styles['all-pages']}>
            <Typography variant="h1" color="primary">Users</Typography>
        </Box>
    );
}

export default Users;
