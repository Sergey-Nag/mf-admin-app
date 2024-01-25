import React from 'react';
import { Box } from '@mui/material';
import { tss } from 'tss-react/mui';
import { Navigation } from '../Navigation/Navigation';
import AdminInfo from '../AdminInfo/AdminInfo';
import AdminSettingsButton from '../AdminSettings/AdminSettings';

const useStyles = tss.create(({ theme }) => ({
    sideBar: {
        width: '300px',
        backgroundColor: theme.palette.background.default,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexGrow: 1,
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
                <Box className={classes.contentContainer}>
                    <AdminInfo />
                    <AdminSettingsButton />
                </Box>
                <Navigation />
            </Box>
            {children}
        </div>
    );
}

export default Layout;
