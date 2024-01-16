import { useState } from 'react';
import { getUploadedImages } from './utils';

export default function useProductPhotos() {
    const [images, setImages] = useState({ cover: null, photos: [] });

    const changeImages = ({ cover, photos }) => {
        if (cover !== undefined) {
            setImages({ ...images, cover });
        }

        if (photos) {
            setImages({
                ...images,
                photos: [
                    ...images.photos,
                    ...photos,
                ],
            });
        } else if (photos === null) {
            setImages({ ...images, photos: [] });
        }
    };

    const removePhoto = (photoName) => {
        const newPhotos = images.photos.filter((x) => x.name !== photoName);
        setImages({ ...images, photos: newPhotos });
    };

    const uploadImages = async () => {
        let coverPhoto = null;
        let photos = [];

        if (images.photos.length > 0) {
            const urls = await getUploadedImages(images.photos);
            photos = urls.map((x) => ({
                id: x.id,
                url: x.url,
                thumbUrl: x.thumb?.url,
                mediumUrl: x.medium?.url,
                deleteUrl: x.delete_url,
                alt: x.title,
            }));
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

            coverPhoto = {
                id,
                url,
                thumbUrl: thumb?.url,
                mediumUrl: medium?.url,
                deleteUrl,
                alt: title,
            };
        }

        return {
            coverPhoto,
            photos,
        };
    };

    return {
        images,
        changeImages,
        removePhoto,
        uploadImages,
    };
}
