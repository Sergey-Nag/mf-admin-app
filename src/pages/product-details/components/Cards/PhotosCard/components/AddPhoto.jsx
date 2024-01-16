/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useId } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { tss } from 'tss-react/mui';

const useStyles = tss.withNestedSelectors().create(({ theme, classes }) => ({
    addPhotoWrapp: {
        position: 'relative',
        width: '100%',
        height: '100%',
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
}));

export default function AddPhoto({ miltiple, onPhotosAdd, className }) {
    const id = useId();
    const { classes, cx } = useStyles();
    return (
        <label
            className={cx(classes.addPhotoWrapp, className)}
            onKeyUp={(e) => {
                if (e.key === 'Enter') e.target.click();
            }}
            tabIndex={0}
            htmlFor={`add-photo-${id}`}
            role="button"
        >
            <input
                type="file"
                id={`add-photo-${id}`}
                multiple={miltiple}
                hidden
                accept="image/png, image/jpeg"
                onChange={(e) => {
                    onPhotosAdd && onPhotosAdd(e.target.files);
                }}
            />
            <AddPhotoAlternateIcon
                className={cx(classes.addPhotoIcon)}
            />
        </label>
    );
}
