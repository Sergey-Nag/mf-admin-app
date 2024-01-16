export const IMAGE_HOST_KEY = process.env.REACT_APP_IMAGE_HOST_KEY;

export const IMAGE_URL = `https://api.imgbb.com/1/upload?key=${IMAGE_HOST_KEY}`;

export async function uploadImages(files) {
    const promises = files.map(async (file) => {
        const formData = new FormData();
        formData.append('image', file);
        return fetch(IMAGE_URL, {
            method: 'POST',
            body: formData,
        });
    });

    return Promise.all(promises);
}
