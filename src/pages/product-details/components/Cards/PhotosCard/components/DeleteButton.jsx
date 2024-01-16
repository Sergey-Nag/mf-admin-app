import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { tss } from 'tss-react/mui';

const useStyles = tss.create(() => ({
    deleteButton: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
}));

export default function DeleteButton({ className, ...rest }) {
    const { classes, cx } = useStyles();
    return (
        <IconButton
            className={cx(classes.deleteButton, className)}
            {...rest}
        >
            <DeleteIcon />
        </IconButton>
    );
}
