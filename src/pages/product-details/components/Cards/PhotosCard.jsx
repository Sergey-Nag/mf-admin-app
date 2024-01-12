/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { ImageList, ImageListItem } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { tss } from 'tss-react/mui';
import PageCard from '../../../../components/PageCard/PageCard';

const useStyles = tss.withNestedSelectors().create(({ theme, classes }) => ({
    cover: {
        width: '100%',
        height: 300,
        display: 'block',
        objectFit: 'cover',
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
    },
    photoWrapp: {
        width: '100%',
        position: 'relative',
        [`&:hover .${classes.photoName}`]: {
            opacity: 1,
        },
    },
    photo: {
        display: 'block',
        objectFit: 'cover',
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
    },
    mBottom: {
        marginBottom: theme.spacing(1),
    },
    addPhotoWrapp: {
        width: '100%',
        height: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `5px dashed ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        cursor: 'pointer',
        '&:hover': {
            background: theme.palette.action.hover,
            borderColor: theme.palette.primary.main,
            [`& .${classes.addPhotoIcon}`]: {
                color: theme.palette.primary.main,
            },
        },
    },
    addPhotoIcon: {
        width: 100,
        height: 100,
        color: theme.palette.action.active,
        margin: 'auto',
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
        // height: 300,
    },
}));

export default function PhotosCard({
    skeleton, photosUrl, coverPhotoUrl, imagesRef, onImageChange,
}) {
    const { classes, cx } = useStyles();
    const [newCover, setNewCover] = useState(null);
    const [newPhotos, setNewPhotos] = useState([]);

    const photos = useMemo(() => {
        return [...(photosUrl ?? []), ...(newPhotos.map((photo) => URL.createObjectURL(photo)))];
    }, [photosUrl, newPhotos]);

    useEffect(() => {
        onImageChange && onImageChange(newCover, newPhotos);
    }, [newCover, newPhotos]);

    return (
        <PageCard title="Photos" skeleton={skeleton} height={400}>
            {(coverPhotoUrl || newCover) && (
                <div className={cx(classes.photoWrapp, classes.mBottom)}>
                    <span className={classes.photoName}>Cover</span>
                    <img src={coverPhotoUrl || (newCover && URL.createObjectURL(newCover))} className={classes.cover} alt="cover" />
                </div>
            )}
            {!coverPhotoUrl && (
                <label
                    className={cx(classes.addPhotoWrapp, classes.mBottom)}
                    onKeyUp={(e) => {
                        // if (e.key === 'Enter') imagesRef.current.coverPhoto.current.click();
                    }}
                    tabIndex={0}
                    htmlFor="cover-photo"
                    role="button"
                >
                    <input
                        type="file"
                        id="cover-photo"
                        hidden
                        accept="image/png, image/jpeg"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            setNewCover(file);
                        }}
                    />
                    <AddPhotoAlternateIcon className={classes.addPhotoIcon} />
                </label>
            )}
            <ImageList
                className={classes.photosList}
                cols={3}
                gap={8}
                // height={300}
                rowHeight={150}
            >
                {photos && photos.map((img) => (
                    <ImageListItem key={img} sx={{ '& .MuiImageListItem-img': { height: 150 } }}>
                        <img
                            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={img}
                            alt={img}
                            className={classes.photo}
                        />
                    </ImageListItem>
                ))}
                <ImageListItem>
                    <label
                        className={classes.addPhotoWrapp}
                        onKeyUp={(e) => {
                            // if (e.key === 'Enter') e.ta.click();
                        }}
                        tabIndex={0}
                        htmlFor="add-photo"
                        role="button"
                    >
                        <input
                            type="file"
                            id="add-photo"
                            multiple
                            hidden
                            accept="image/png, image/jpeg"
                            onChange={(e) => {
                                const { files } = e.target;
                                setNewPhotos([...newPhotos, ...files]);
                            }}
                        />
                        <AddPhotoAlternateIcon
                            className={cx(classes.addPhotoIcon, classes.photoMini)}
                        />
                    </label>
                </ImageListItem>
            </ImageList>
        </PageCard>
    );
}
