import { useFormik } from 'formik';
import { useState } from 'react';
import { getEditProductInput, getUploadedImages } from '../utils';
import { productValidationSchema } from '../validationSchema';

export function useEditProductData(product, updateProduct) {
    const [images, setImages] = useState({ cover: null, photos: [] });
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
            ...product,
            price: product?.price.toFixed(2),
        },
        onSubmit: async (values) => {
            const editProductInput = getEditProductInput(product, values);
            if (!editProductInput) {
                return;
            }

            try {
                if (images.photos.length > 0) {
                    const urls = await getUploadedImages(images.photos);
                    editProductInput.photosUrl = [
                        ...(values.photosUrl ?? []),
                        ...urls,
                    ];
                }

                if (images.cover) {
                    const [url] = await getUploadedImages([images.cover]);
                    editProductInput.coverPhotoUrl = url;
                }
            } catch (e) {
                console.error(e);
            }

            updateProduct(editProductInput);
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
        setImages,
    };
}
