import React from 'react';
import Page from '../../components/Page/Page';
import SmallCard from './components/Card/SmallCard';
import MediumCard from './components/Card/MediumCard';

function DashboardPage() {
    return (
        <Page title="Dashboard">
            <SmallCard title="SMALL" link="ascxas" />
            <SmallCard title="SMALL" />
            <SmallCard title="SMALL" />
            <SmallCard title="SMALL" />
            <MediumCard title="MEDIUM" />
            <MediumCard title="MEDIUM" />
        </Page>
    );
}

export default DashboardPage;
