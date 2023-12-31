import React from 'react';
import { Box } from '@mui/material';
import { tss } from 'tss-react/mui';
import { Navigation } from '../Navigation/Navigation';
import AdminInfo from '../AdminInfo/AdminInfo';

const useStyles = tss.create(({ theme }) => ({
    sideBar: {
        width: '300px',
        backgroundColor: theme.palette.background.default,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    layout: {
        display: 'flex',
        height: '100vh',
        backgroundColor: theme.palette.grey[100],
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
    },
}));

function Layout({ children }) {
    const { classes } = useStyles();

    return (
        <div className={classes.layout}>
            <Box className={classes.sideBar}>
                <AdminInfo />
                <Navigation />
            </Box>
            {children}
        </div>
    );
}

export default Layout;
