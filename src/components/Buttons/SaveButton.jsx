import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

export default function SaveButton({ busy, ...props }) {
    return (
        <Button
            variant="contained"
            startIcon={busy ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
            disableElevation
            {...props}
        >
            Save
        </Button>
    );
}
