import { Alert, Slide, Snackbar } from '@mui/material';
import React from 'react';

export default function Notification({ show, severity = 'success', children }) {
    const [open, setOpen] = React.useState(true);
    return (
        <Snackbar
            open={show && open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            TransitionComponent={Slide}
        >
            <Alert severity={severity} onClose={() => setOpen(false)}>
                {children}
            </Alert>
        </Snackbar>
    );
}
