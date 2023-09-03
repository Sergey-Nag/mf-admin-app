import { Skeleton, Grid } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

export function DashboardPage() {
    const params = useParams();
    console.log(params);
    return (
        <>
            <h4 style={{ color: 'white' }}>Dashboard page №{params.id}</h4>
            <Grid container gap>
                <Grid item xs={3}>
                    <Skeleton variant="rectangular" width="100%" height={50} />
                </Grid>
                <Grid item xs={3}>
                    <Skeleton variant="rectangular" width="100%" height={50} />
                </Grid>
                <Grid item xs={3}>
                    <Skeleton variant="rectangular" width="100%" height={50} />
                </Grid>
                <Grid container gap>
                    <Skeleton variant="rectangular" width={200} height={50} />
                    <Skeleton variant="rectangular" width={200} height={50} />
                    <Skeleton variant="rectangular" width={200} height={50} />
                    <Skeleton variant="circular" width={50} height={50} />
                    <Skeleton variant="rectangular" width={100} height={50} />
                </Grid>
                <Grid container gap>
                    <Skeleton variant="circular" width={50} height={50} />
                    <Skeleton variant="text" width={200} height={50} />
                    <Skeleton variant="text" width={200} height={50} />
                    <Skeleton variant="circular" width={50} height={50} />
                    <Skeleton variant="rectangular" width={500} height={50} />
                </Grid>
            </Grid>
            <Link to="/dashboard"><h4 style={{ color: 'white' }}>Back</h4></Link>
        </>
    );
}
