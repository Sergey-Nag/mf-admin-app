import { uploadImages } from '../../api/rest/imageApis';

export const getUploadedImages = async (images) => {
    const responses = await uploadImages(images);
    if (responses.some((res) => !res.ok)) {
        throw new Error('Error uploading images');
    }

    const res = await Promise.all(responses.map((r) => r.json()));
    return res.map((x) => x.data);
};
