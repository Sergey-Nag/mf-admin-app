import React from 'react';
import { Box } from '@mui/material';
import { tss } from 'tss-react/mui';
import { Navigation } from '../Navigation/Navigation';

const useStyles = tss.create(({ theme }) => ({
    sideBar: {
        width: '300px',
        backgroundColor: theme.palette.background.default,
        height: '100%',
    },
    layout: {
        display: 'flex',
        height: '100vh',
        backgroundColor: theme.palette.background.light,
    },
}));

function Layout({ children }) {
    const { classes } = useStyles();

    return (
        <div className={classes.layout}>
            <Box className={classes.sideBar}>
                <Navigation />
            </Box>
            {children}
        </div>
    );
}

export default Layout;
