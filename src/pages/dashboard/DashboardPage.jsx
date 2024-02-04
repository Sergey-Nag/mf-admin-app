import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import React from 'react';
import { tss } from 'tss-react/mui';
import Page from '../../components/Page/Page';
import SmallCard from './components/Card/SmallCard';
import { DASHBOARD_NUMBERS } from './queries';

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
    const { data } = useQuery(DASHBOARD_NUMBERS);

    return (
        <Page title="Dashboard">
            <SmallCard title="Pages" link="/pages">
                <div className={classes.dashboardCards}>
                    <Typography variant="h1" className={classes.cardsContent}>
                        {data?.pages?.totalItems ?? 0}
                    </Typography>
                </div>
            </SmallCard>
            <SmallCard title="Products" link="/products">
                <div className={classes.dashboardCards}>
                    <Typography variant="h1" className={classes.cardsContent}>
                        {data?.products?.totalItems ?? 0}
                    </Typography>
                </div>
            </SmallCard>
            <SmallCard title="Orders" link="/orders">
                <div className={classes.dashboardCards}>
                    <Typography variant="h1" className={classes.cardsContent}>
                        {data?.orders?.totalItems ?? 0}
                    </Typography>
                </div>
            </SmallCard>
            <SmallCard title="Customers" link="/customers">
                <div className={classes.dashboardCards}>
                    <Typography variant="h1" className={classes.cardsContent}>
                        {data?.customers?.totalItems ?? 0}
                    </Typography>
                </div>
            </SmallCard>
        </Page>
    );
}

export default DashboardPage;
