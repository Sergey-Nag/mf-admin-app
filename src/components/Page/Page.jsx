import { ChevronLeft } from '@mui/icons-material';
import { Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
        color: theme.palette.text.secondary,
    },
}));

function Page({ title, children, showBackButton = false }) {
    const { classes } = useStyles();
    return (
        <div className={classes.page}>
            <div className={classes.titleWrap}>
                <Typography variant="h4" className={classes.title}>
                    {showBackButton && (
                        <IconButton component={Link} to={-1}>
                            <ChevronLeft sx={{ width: '2rem', height: '2rem' }} />
                        </IconButton>
                    )}
                    {title}
                </Typography>
            </div>
            <Grid container spacing={2}>{children}</Grid>
        </div>
    );
}
export default Page;
