import React from 'react';
import { Typography, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { tss } from 'tss-react/mui';
import Page from '../../components/Page/Page';

const useStyles = tss.create(({ theme }) => ({

    textWrap: {
        textAlign: 'center',
    },
    title404: {
        color: theme.palette.grey[900],
    },
    titlePageNotFound: {
        marginBottom: theme.spacing(1),
        color: theme.palette.grey[600],
    },
    btn: {
        marginBottom: theme.spacing(1),
    },

}));

function NotFoundPage() {
    const { classes } = useStyles();

    return (
        <Page>
            <Grid item xs={12} className={classes.textWrap}>
                <Typography variant="h1" className={classes.title404}>404</Typography>
                <Typography variant="h4" className={classes.titlePageNotFound}>Page not found</Typography>
                <NavLink to="/"><Button className={classes.btn} size="medium" color="primary" variant="contained" aria-label="outlined primary button">Go to main page</Button></NavLink>
            </Grid>
        </Page>
    );
}
export default NotFoundPage;
