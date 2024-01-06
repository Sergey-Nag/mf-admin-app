import React from 'react';
import { CircularProgress } from '@mui/material';
import { tss } from 'tss-react/mui';

const useStyles = tss.create(() => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default function Loader() {
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    );
}
