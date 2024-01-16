import { Grid, Skeleton } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import SaveButton from '../../components/Buttons/SaveButton';
import Page from '../../components/Page/Page';
import AmountCard from './components/Cards/AmountCard';
import ChangesCard from './components/Cards/ChangesCard';
import CharacteristicsCard from './components/Cards/CharacteristicsCard';
import GeneralCard from './components/Cards/GeneralCard';
import OptionsCard from './components/Cards/OptionsCard';
import PhotosCard from './components/Cards/PhotosCard/PhotosCard';
import PriceCard from './components/Cards/PriceCard';
import PublishButton from './components/PublishButton/PublishButton';
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
        errors, touched, isValid, onImagesChange,
        imagesLoading, images,
    } = useEditProductData(product, updateProduct);

    return (
        <Page
            title={product ? product.name : <Skeleton variant="text" width={300} sx={{ display: 'inline-block' }} />}
            showBackButton
            rightControls={(
                <>
                    <PublishButton
                        value={product ? product.isPublished : false}
                        onChange={
                            (e) => updateProduct({
                                isPublished: e.target.value,
                            })
                        }
                    />
                    <SaveButton
                        disabled={!isValid || !dirty || updating || imagesLoading}
                        onClick={handleSubmit}
                        busy={updating || imagesLoading}
                    />
                </>
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
                    onImageChange={onImagesChange}
                    imagesToUpload={images}
                />
            </Grid>
        </Page>
    );
}
