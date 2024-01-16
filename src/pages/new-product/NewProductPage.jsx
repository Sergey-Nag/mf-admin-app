import { Grid } from '@mui/material';
import React from 'react';
import Page from '../../components/Page/Page';
import GeneralCard from '../../components/ProductCards/GeneralCard';
import { useNewProductData } from './hooks/useNewProductData';
import AmountCard from '../../components/ProductCards/AmountCard';
import PriceCard from '../../components/ProductCards/PriceCard';
import OptionsCard from '../../components/ProductCards/OptionsCard';
import CharacteristicsCard from '../../components/ProductCards/CharacteristicsCard';
import PhotosCard from '../../components/ProductCards/PhotosCard/PhotosCard';
import ProductControls from '../../components/ProductControls/ProductControls';
import { useCreateProduct } from './hooks/useCreateProduct';

export default function NewProductPage() {
    const { createProduct, loading } = useCreateProduct();
    const {
        productValues, errors, touched,
        handleChange, setFieldValue, handleBlur,
        changeImages, isValid, dirty,
        handleSubmit, removePhoto,
        imagesLoading,
    } = useNewProductData(createProduct);

    return (
        <Page
            showBackButton
            title="New Product"
            rightControls={(
                <ProductControls
                    isSaveDisabled={!isValid || !dirty || loading}
                    isSaveBusy={imagesLoading || loading}
                    onSave={handleSubmit}
                    publishValue={productValues?.isPublished}
                    onPublishChange={(e) => {
                        setFieldValue('isPublished', e.target.value);
                    }}
                />
            )}
        >
            <Grid item xs={12} lg={6}>
                <GeneralCard
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
                            shipping={null}
                            amount={productValues?.stock?.amount}
                            lowStockAlert={productValues?.stock?.lowStockAlert}
                            setFieldValue={setFieldValue}
                            handleBlur={handleBlur}
                            height={100}
                        />
                    </Grid>
                    <Grid item xs={6} lg={12} xl={6} order={{ xs: 1, lg: 0, xl: 1 }}>
                        <PriceCard
                            price={productValues?.price}
                            setFieldValue={setFieldValue}
                            onBlur={handleBlur}
                            error={errors?.price}
                            touched={touched.price}
                            height={50}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <OptionsCard
                    options={productValues?.options}
                    setFieldValue={setFieldValue}
                    onBlur={handleBlur}
                    errors={errors?.options}
                    touched={touched}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <CharacteristicsCard
                    characteristics={productValues?.characteristics}
                    setFieldValue={setFieldValue}
                    onBlur={handleBlur}
                    errors={errors?.characteristics}
                    touched={touched}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <PhotosCard
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
