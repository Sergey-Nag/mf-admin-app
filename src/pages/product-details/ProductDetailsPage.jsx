import { Grid, Skeleton } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../../components/Page/Page';
import AmountCard from '../../components/ProductCards/AmountCard';
import ChangesCard from '../../components/ProductCards/ChangesCard';
import CharacteristicsCard from '../../components/ProductCards/CharacteristicsCard';
import GeneralCard from '../../components/ProductCards/GeneralCard';
import OptionsCard from '../../components/ProductCards/OptionsCard';
import PhotosCard from '../../components/ProductCards/PhotosCard/PhotosCard';
import PriceCard from '../../components/ProductCards/PriceCard';
import ProductControls from '../../components/ProductControls/ProductControls';
import { useEditProductData } from './hooks/useEditProductData';
import { useProductData } from './hooks/useProductData';

export default function ProductDetailsPage() {
    const params = useParams();
    const {
        product, updateProduct, loading, updating,
    } = useProductData(params.id);

    const {
        productValues, dirty, ready, handleChange,
        setFieldValue, handleBlur, handleSubmit,
        errors, touched, isValid, changeImages,
        imagesLoading, removePhoto,
    } = useEditProductData(product, updateProduct);

    return (
        <Page
            title={product ? product.name : <Skeleton variant="text" width={300} sx={{ display: 'inline-block' }} />}
            showBackButton
            rightControls={(
                <ProductControls
                    publishValue={product ? product.isPublished : false}
                    onPublishChange={
                        (e) => updateProduct({
                            isPublished: e.target.value,
                        })
                    }
                    isSaveDisabled={!isValid || !dirty || updating || imagesLoading}
                    onSave={handleSubmit}
                    isSaveBusy={updating || imagesLoading}
                />
            )}
        >
            <Grid item xs={12} lg={6}>
                <GeneralCard
                    skeleton={loading || !ready}
                    id={product?.id}
                    name={productValues?.name}
                    alias={productValues?.alias}
                    categories={productValues?.categories}
                    tags={productValues?.tags}
                    description={productValues?.description}
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    handleBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <Grid container spacing={2}>
                    <Grid item xs={6} lg={12} xl={6} order={{ xs: 0, lg: 1, xl: 0 }}>
                        <AmountCard
                            skeleton={!ready}
                            amount={productValues?.stock?.amount}
                            lowStockAlert={productValues?.stock?.lowStockAlert}
                            setFieldValue={setFieldValue}
                            handleBlur={handleBlur}
                            height={100}
                        />
                    </Grid>
                    <Grid item xs={6} lg={12} xl={6} order={{ xs: 1, lg: 0, xl: 1 }}>
                        <PriceCard
                            skeleton={!ready}
                            price={productValues?.price}
                            priceHistory={product?.priceHistory}
                            setFieldValue={setFieldValue}
                            onBlur={handleBlur}
                            error={errors?.price}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <OptionsCard
                    skeleton={!ready}
                    options={productValues?.options}
                    setFieldValue={setFieldValue}
                    onBlur={handleBlur}
                    errors={errors?.options}
                    touched={touched}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <CharacteristicsCard
                    skeleton={!ready}
                    characteristics={productValues?.characteristics}
                    setFieldValue={setFieldValue}
                    onBlur={handleBlur}
                    errors={errors?.characteristics}
                    touched={touched}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <ChangesCard
                    skeleton={!ready}
                    createdBy={product?.createdBy}
                    updatedBy={product?.modifiedBy}
                    createdAt={product?.createdISO}
                    updatedAt={product?.lastModifiedISO}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <PhotosCard
                    skeleton={!ready}
                    coverPhoto={productValues?.coverPhoto}
                    photos={productValues?.photos}
                    setFieldValue={setFieldValue}
                    onImageChange={changeImages}
                    removePhoto={removePhoto}
                />
            </Grid>
        </Page>
    );
}
