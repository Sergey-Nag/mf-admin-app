import React from 'react';
import { Typography } from '@mui/material';
import { tss } from 'tss-react/mui';
import Page from '../../components/Page/Page';
import SmallCard from './components/Card/SmallCard';

const useStyles = tss.create(() => ({
    dashboardCards: {
        display: 'flex',
        height: '100%',
    },
    cardsContent: {
        margin: 'auto',
    },
}));

function DashboardPage() {
    const { classes } = useStyles();
    return (
        <Page title="Dashboard">
            <SmallCard title="Pages" link="/pages">
                <div className={classes.dashboardCards}>
                    <Typography variant="h1" className={classes.cardsContent}>10</Typography>
                </div>
            </SmallCard>
            <SmallCard title="Products" link="/products">
                <div className={classes.dashboardCards}>
                    <Typography variant="h1" className={classes.cardsContent}>10</Typography>
                </div>
            </SmallCard>
            <SmallCard title="Orders" link="/orders">
                <div className={classes.dashboardCards}>
                    <Typography variant="h1" className={classes.cardsContent}>10</Typography>
                </div>
            </SmallCard>
            <SmallCard title="Customers" link="/customers">
                <div className={classes.dashboardCards}>
                    <Typography variant="h1" className={classes.cardsContent}>10</Typography>
                </div>
            </SmallCard>
        </Page>
    );
}

export default DashboardPage;
