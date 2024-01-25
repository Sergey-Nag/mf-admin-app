import React from 'react';
import { Link } from 'react-router-dom';
import { tss } from 'tss-react/mui'; // Предполагается, что у вас установлен React Router
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';

const useStyles = tss.create(({ theme }) => ({
    settingsWrap: {
        padding: theme.spacing(1),
        display: 'flex',
        gap: theme.spacing(1.5),
        alignItems: 'baseline',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    icon: {
        fontSize: '34px',
        cursor: 'pointer',
        color: theme.palette.grey[300],
        transition: 'transform 0.3s, scale 0.3s',
        '&:hover': {
            transform: 'rotate(360deg) scale(1.2)',
        },
    },
}));

function AdminSettingsButton() {
    const { classes } = useStyles();
    return (
        <div className={classes.settingsWrap}>
            <IconButton
                to="/user-settings"
                LinkComponent={Link}
            ><SettingsIcon className={classes.icon} />
            </IconButton>
        </div>

    );
}

export default AdminSettingsButton;
