import { Grid, Skeleton } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../../components/Page/Page';
import AmountCard from './components/Cards/AmountCard';
import ChangesCard from './components/Cards/ChangesCard';
import CharacteristicsCard from './components/Cards/CharacteristicsCard';
import GeneralCard from './components/Cards/GeneralCard';
import OptionsCard from './components/Cards/OptionsCard';
import PhotosCard from './components/Cards/PhotosCard';
import PriceCard from './components/Cards/PriceCard';
import { useProductData } from './hooks/useProductData';

export default function ProductDetailsPage() {
    const params = useParams();
    const { product, loading } = useProductData(params.id);
    console.log(product);
    return (
        <Page title={product ? product.name : <Skeleton variant="text" width={300} sx={{ display: 'inline-block' }} />} showBackButton>
            <Grid item xs={12} sm={12} md={7} lg={6} xl={6}>
                <GeneralCard
                    skeleton={loading}
                    id={product?.id}
                    name={product?.name}
                    alias={product?.alias}
                    categories={product?.categories}
                    tags={product?.tags}
                    description={product?.description}
                />
            </Grid>
            <Grid item xs={6} sm={6} md={5} lg={3} xl={3}>
                <AmountCard
                    skeleton={loading}
                    amount={product?.stock?.amount}
                    lowStockAlert={product?.stock?.lowStockAlert}
                    available={product?.stock?.amount}
                />
            </Grid>
            <Grid item xs={6} sm={6} md={5} lg={3} xl={3}>
                <PriceCard
                    skeleton={loading}
                    price={product?.price}
                    priceHistory={product?.priceHistory}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={6} xl={6}>
                <OptionsCard
                    skeleton={loading}
                    options={product?.options}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={6} xl={6}>
                <CharacteristicsCard
                    skeleton={loading}
                    characteristics={product?.characteristics}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={6} xl={6}>
                <ChangesCard
                    skeleton={loading}
                    createdBy={product?.createdBy}
                    updatedBy={product?.modifiedBy}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={6} xl={6}>
                <PhotosCard
                    skeleton={loading}
                    coverPhotoUrl={product?.coverPhotoUrl}
                    photosUrl={product?.photosUrl}
                />
            </Grid>
        </Page>
    );
}
