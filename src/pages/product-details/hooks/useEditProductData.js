import { useFormik } from 'formik';
import { useState } from 'react';
import useProductPhotos from '../../../hooks/useProductPhotos';
import { productValidationSchema } from '../validationSchema';

export function useEditProductData(product, updateProduct) {
    const {
        images, changeImages, removePhoto, uploadImages,
    } = useProductPhotos();
    const [imagesLoading, setImagesLoading] = useState(false);
    const {
        values: productValues,
        dirty,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
        handleSubmit,
        isValid,
        ...rest
    } = useFormik({
        validationSchema: productValidationSchema,
        initialValues: {
            name: product?.name ?? '',
            alias: product?.alias ?? '',
            description: product?.description ?? '',
            price: product?.price.toFixed(2),
            categories: product?.categories ?? [],
            tags: product?.tags ?? [],
            stock: product?.stock ?? { amount: 0, lowStockAlert: 0 },
            characteristics: product?.characteristics ?? [],
            options: product?.options ?? [],
            coverPhoto: product?.coverPhoto ?? null,
            photos: product?.photos ?? [],
        },
        onSubmit: async (values) => {
            try {
                setImagesLoading(true);
                const uploadedImages = await uploadImages();

                values.photos = [
                    ...(values.photos ?? []).filter((photo) => {
                        return !images.photos.some((x) => x.name === photo.alt);
                    }),
                    ...uploadedImages.photos,
                ];

                if (uploadedImages.coverPhoto) {
                    values.coverPhoto = uploadedImages.coverPhoto;
                }
            } catch (e) {
                console.error(e);
            } finally {
                setImagesLoading(false);
            }

            const {
                categories, price, alias, ...restValues
            } = values;

            updateProduct({
                price: +price !== product.price ? +price : undefined,
                categoriesId: categories.map((x) => x.id),
                alias: alias !== product.alias ? alias : undefined,
                ...restValues,
            });
            changeImages({ cover: null, photos: null });
        },
        enableReinitialize: true,
    });

    return {
        productValues,
        dirty,
        ready: !!productValues,
        errors: rest.errors,
        touched,
        isValid,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        changeImages,
        imagesLoading,
        removePhoto,
    };
}
