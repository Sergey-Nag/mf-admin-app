import { useFormik } from 'formik';
import { useState } from 'react';
import { getUploadedImages } from '../utils';
import { productValidationSchema } from '../validationSchema';

export function useEditProductData(product, updateProduct) {
    const [images, setImages] = useState({ cover: null, photos: [] });
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

                if (images.photos.length > 0) {
                    const urls = await getUploadedImages(images.photos);
                    values.photos = [
                        ...(values.photos ?? []).filter((photo) => {
                            return !images.photos.some((x) => x.name === photo.alt);
                        }),
                        ...urls.map((x) => ({
                            id: x.id,
                            url: x.url,
                            thumbUrl: x.thumb?.url,
                            mediumUrl: x.medium?.url,
                            deleteUrl: x.delete_url,
                            alt: x.title,
                        })),
                    ];
                }

                if (images.cover) {
                    const [meta] = await getUploadedImages([images.cover]);
                    const {
                        id,
                        url,
                        thumb,
                        medium,
                        delete_url: deleteUrl,
                        title,
                    } = meta;

                    values.coverPhoto = {
                        id,
                        url,
                        thumbUrl: thumb?.url,
                        mediumUrl: medium?.url,
                        deleteUrl,
                        alt: title,
                    };
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
        },
        enableReinitialize: true,
    });

    const onImagesChange = ({ cover, photos }) => {
        if (cover !== undefined) {
            setImages({ ...images, cover });
        }

        if (photos) {
            setImages({ ...images, photos });
        }
    };

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
        onImagesChange,
        imagesLoading,
        images,
    };
}
