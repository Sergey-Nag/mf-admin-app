import React from 'react';
import Page from '../../components/Page/Page';
import Tile from '../../components/Tile/Tile';

function DashboardPage() {
    return (
        <Page title="Dashboard">
            <Tile slots={1} />
            <Tile slots={1} />
            <Tile slots={1} />
            <Tile slots={1} />
            <Tile slots={2} />
            <Tile slots={2} />
        </Page>
    );
}

export default DashboardPage;
