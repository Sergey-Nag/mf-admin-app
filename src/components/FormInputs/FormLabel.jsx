import React from 'react';
import { InputLabel } from '@mui/material';
import { tss } from 'tss-react/mui';

const useStyles = tss.create(({ align }) => ({
    label: {
        textAlign: align ?? 'right',
    },
}));

export default function FormLabel({ label, align, htmlFor }) {
    const { classes } = useStyles({ align });

    return <InputLabel className={classes.label} htmlFor={htmlFor}>{label}</InputLabel>;
}
