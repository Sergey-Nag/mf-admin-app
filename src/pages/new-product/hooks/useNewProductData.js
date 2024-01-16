import { useFormik } from 'formik';
import { useState } from 'react';
import { newProductValidationSchema } from '../validationSchema';
import useProductPhotos from '../../../hooks/useProductPhotos';

export function useNewProductData(createProduct) {
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
        errors,
    } = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '0.00',
            categories: [],
            options: [],
            characteristics: [],
            alias: '',
            coverPhoto: null,
            photos: [],
            stock: {
                amount: 0,
                lowStockAlert: 0,
            },
            isPublished: false,
        },
        validationSchema: newProductValidationSchema,
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

            createProduct(values);
            changeImages({ cover: null, photos: null });
        },
    });

    return {
        productValues,
        dirty,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
        handleSubmit,
        isValid,
        errors,
        images,
        changeImages,
        removePhoto,
        imagesLoading,
    };
}
