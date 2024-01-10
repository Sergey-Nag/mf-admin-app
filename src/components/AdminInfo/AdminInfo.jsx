import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { tss } from 'tss-react/mui';
import { useAuth } from '../../providers/AuthProvider';

const useStyles = tss.create(({ theme }) => ({
    adminWrap: {
        padding: theme.spacing(2),
        display: 'flex',
        gap: theme.spacing(1.5),
        alignItems: 'baseline',
    },
    avatar: {
        height: theme.spacing(4),
        width: theme.spacing(4),
        paddingTop: theme.spacing(0.3),
    },
    name: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        color: theme.palette.primary.contrastText,
        opacity: 0.8,
    },
}));

export default function AdminInfo() {
    const { classes } = useStyles();
    const { user } = useAuth();
    const firstName = user ? user.firstname : '';
    const lastName = user ? user.lastname : '';
    const getInitials = () => {
        if (firstName && lastName) {
            const firstInitial = firstName.charAt(0).toUpperCase();
            const lastInitial = lastName.charAt(0).toUpperCase();
            return `${firstInitial}${lastInitial}`;
        } if (firstName) {
            return firstName.charAt(0).toUpperCase();
        }
        return '';
    };

    return (
        <Box className={classes.adminWrap}>
            <Avatar className={classes.avatar}>
                <Typography variant="body2">
                    {getInitials()}
                </Typography>
            </Avatar>
            {user && (
                <Typography className={classes.name}>
                    {firstName}
                    {lastName && ' '}
                    {lastName}
                </Typography>
            )}
        </Box>
    );
}
