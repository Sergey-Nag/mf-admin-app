import { uploadImages } from '../../api/rest/imageApis';
import { getChangedProperties } from '../../utils/getChangedProperties';

export const getEditProductInput = (product, values) => {
    const changedProperties = getChangedProperties(product, values);
    if (Object.keys(changedProperties).length === 0) {
        return;
    }
    return {
        name: 'name' in changedProperties ? values.name : undefined,
        description: 'description' in changedProperties ? values.description : undefined,
        price: 'price' in changedProperties && +changedProperties.price !== +product.price
            ? +values.price
            : undefined,
        alias: 'alias' in changedProperties ? values.alias : undefined,
        isPublished: 'isPublished' in changedProperties ? values.isPublished : undefined,
        tags: 'tags' in changedProperties ? values.tags : undefined,
        coverPhotoUrl: 'coverPhotoUrl' in changedProperties ? values.coverPhotoUrl : undefined,
        photosUrl: 'photosUrl' in changedProperties ? values.photosUrl : undefined,
        categoriesId: 'categories' in changedProperties
            ? changedProperties?.categories.map((x) => x.id)
            : undefined,
        characteristics: 'characteristics' in changedProperties ? values.characteristics : undefined,
        options: 'options' in changedProperties ? values.options : undefined,
        stock: 'stock' in changedProperties ? values.stock : undefined,
    };
};

export const getUploadedImages = async (images) => {
    const responses = await uploadImages(images);
    if (responses.some((res) => !res.ok)) {
        throw new Error('Error uploading images');
    }

    const res = await Promise.all(responses.map((r) => r.json()));
    return res.map((x) => x.data.url);
};
