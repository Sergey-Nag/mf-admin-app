/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { IconButton, ImageList, ImageListItem } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { tss } from 'tss-react/mui';
import PageCard from '../../../../../components/PageCard/PageCard';
import { IMAGE_HOST_KEY } from '../../../../../api/rest/imageApis';
import Photo from './components/Photo';
import AddPhoto from './components/AddPhoto';

const useStyles = tss.create(({ theme }) => ({
    cover: {
        width: '100%',
        height: 400,
        display: 'block',
        objectFit: 'cover',
        marginBottom: theme.spacing(1),
    },
    addCover: {
        height: 400,
    },
    border: {
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
    },
    mBottom: {
        marginBottom: theme.spacing(1),
    },
    photoMini: {
        width: 70,
        height: 70,
    },
    photoName: {
        position: 'absolute',
        fontSize: 11,
        top: 0,
        left: 0,
        padding: theme.spacing(1),
        background: 'rgba(0,0,0,.5)',
        color: '#fff',
        borderTopLeftRadius: theme.shape.borderRadius,
        opacity: 0.5,
    },
    photosList: {
        width: '100%',
        '& .MuiImageListItem-img': {
            height: 150,
        },
    },
}));

export default function PhotosCard({
    skeleton, photos, coverPhoto, imagesToUpload, onImageChange, setFieldValue,
}) {
    const { classes, cx } = useStyles();

    const onDeleteCover = () => {
        setFieldValue('coverPhoto', null);
        onImageChange({ cover: null });
    };

    const onDeletePhoto = (photoId) => {
        const changedPhotos = [...photos];
        const deletedPhotoIndex = changedPhotos.findIndex((item) => item.id === photoId);

        if (deletedPhotoIndex === -1) return;
        const deletedPhoto = changedPhotos.splice(deletedPhotoIndex, 1)[0];

        setFieldValue('photos', changedPhotos);
        onImageChange({
            photos: imagesToUpload.photos.filter(
                (ph) => ph.name !== deletedPhoto.alt,
            ),
        });
    };
    const setNewPhotos = (files) => {
        if (!files || files.length === 0) return;

        const newPhotos = Array.from(files).map((file) => ({
            id: file.name,
            url: URL.createObjectURL(file),
            alt: file.name,
        }));
        setFieldValue('photos', [...photos, ...newPhotos]);
        onImageChange({ photos: [...imagesToUpload.photos, ...files] });
    };

    const setNewCoverImage = ([file] = []) => {
        if (!file) return;

        const url = URL.createObjectURL(file);
        setFieldValue('coverPhoto', {
            url,
            alt: file.name,
        });
        onImageChange({ cover: file });
    };
    return (
        <PageCard title="Photos" skeleton={skeleton} height={400}>
            {coverPhoto && (
                <Photo
                    photo={coverPhoto}
                    onDelete={onDeleteCover}
                    photoTitle="Cover"
                    className={cx(classes.cover, classes.border, classes.mBottom)}
                />
            )}
            {!coverPhoto && (
                <AddPhoto
                    miltiple={false}
                    onPhotosAdd={setNewCoverImage}
                    className={cx(classes.addCover, classes.mBottom)}
                />
            )}
            <ImageList
                className={classes.photosList}
                cols={3}
                gap={8}
                rowHeight={150}
            >
                {photos && photos.map((photo, i) => (
                    <ImageListItem key={photo.id}>
                        <Photo
                            photo={photo}
                            onDelete={() => onDeletePhoto(photo.id)}
                            photoTitle={`${i + 1}`}
                        />
                    </ImageListItem>
                ))}
                <AddPhoto onPhotosAdd={setNewPhotos} miltiple />
            </ImageList>
        </PageCard>
    );
}
