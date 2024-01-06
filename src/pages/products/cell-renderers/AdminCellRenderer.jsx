import { Avatar, Typography } from '@mui/material';
import React from 'react';
import { tss } from 'tss-react/mui';

const useStyles = tss.create(() => ({
    wrapp: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function AdminCellRenderer({ value }) {
    const { classes } = useStyles();
    const { firstname, lastname } = value ?? {};

    const initials = value ? `${firstname[0]}${lastname?.[0] ?? ''}` : 'N/A';

    return (
        <div className={classes.wrapp}>
            <Avatar>
                <Typography variant="body2">
                    {initials.toUpperCase()}
                </Typography>
            </Avatar>
        </div>
    );
}
