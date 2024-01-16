import { Box } from '@mui/material';
import React from 'react';
import { tss } from 'tss-react/mui';
import DeleteButton from './DeleteButton';

const useStyles = tss.withNestedSelectors().create(({ theme, classes }) => ({
    photoWrapp: {
        width: '100%',
        height: '100%',
        position: 'relative',
        [`&:hover .${classes.deleteBtn}`]: {
            opacity: 1,
        },
    },
    photo: {
        height: '100%',
        width: '100%',
        display: 'block',
        objectFit: 'cover',
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
    },
    deleteBtn: {
        opacity: 0,
    },
    title: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: theme.spacing(0.5, 1),
        background: 'rgba(0,0,0,.5)',
        color: theme.palette.common.white,
        borderTopLeftRadius: theme.shape.borderRadius,
        opacity: 0.5,
        fontSize: 11,
    },
}));

export default function Photo({
    photo, onDelete, className, photoTitle,
}) {
    const { classes, cx } = useStyles();
    return (
        <Box className={cx(classes.photoWrapp, className)}>
            {photoTitle && <span className={classes.title}>{photoTitle}</span>}
            <img
                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={photo.url}
                alt={photo.alt}
                className={classes.photo}
                title={photo.alt}
            />
            <DeleteButton onClick={onDelete} className={classes.deleteBtn} />
        </Box>
    );
}
