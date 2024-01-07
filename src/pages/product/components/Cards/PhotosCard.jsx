import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import { tss } from 'tss-react/mui';
import PageCard from '../../../../components/PageCard/PageCard';

const useStyles = tss.withNestedSelectors().create(({ theme, classes }) => ({
    cover: {
        width: '100%',
        height: 300,
        objectFit: 'cover',
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        '&:before': {
            content: '"Cover"',
            display: 'block',
            paddingTop: '100%',
        },
    },
    photoWrapp: {
        width: '100%',
        position: 'relative',
        [`&:hover .${classes.photoName}`]: {
            opacity: 1,
        },
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
        height: 300,
    },
}));

export default function PhotosCard({ skeleton, photosUrl, coverPhotoUrl }) {
    const { classes } = useStyles();
    return (
        <PageCard title="Photos" skeleton={skeleton} height={400}>
            <div className={classes.photoWrapp}>
                <span className={classes.photoName}>Cover</span>
                <img src={coverPhotoUrl} className={classes.cover} alt="cover" />
            </div>
            {photosUrl && (
                <ImageList
                    className={classes.photosList}
                    cols={3}
                    rowHeight={164}
                >
                    {photosUrl.map((img) => (
                        <ImageListItem key={img}>
                            <img
                                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={img}
                                alt={img}
                                // loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            )}

        </PageCard>
    );
}
