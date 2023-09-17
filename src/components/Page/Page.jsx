import { Typography } from '@mui/material';
import React from 'react';
import { tss } from 'tss-react/mui';

const useStyles = tss.create(({ theme }) => ({
    page: {
        overflow: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),

    },
    titleWrap: {
        height: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
    title: {
        fontWeight: 600,
    },

}));

function Page({ title, children }) {
    const { classes } = useStyles();
    return (
        <div className={classes.page}>
            <div className={classes.titleWrap}>
                <Typography variant="h4" className={classes.title}>{title}</Typography>
            </div>
            <div>{children}</div>
        </div>
    );
}
export default Page;
