import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
    TextField, Button, Typography, Box, Paper,
} from '@mui/material';
import { tss } from 'tss-react/mui';
import { useAuth } from '../../providers/AuthProvider';

const useStyles = tss.create(({ theme }) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: theme.palette.background.light,
    },
    loginBox: {
        padding: theme.spacing(3),
        width: '400px',
    },
    input: {
        marginBottom: theme.spacing(2),
    },
}));

function LoginPage() {
    const { isAuthorized, login } = useAuth();
    const { classes } = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (email && password) {
            login({ email, password });
        }
    };

    if (isAuthorized) {
        return <Navigate to="/" />;
    }

    return (
        <Box className={classes.container}>
            <Paper className={classes.loginBox} elevation={6}>
                <Typography variant="h4" align="center" gutterBottom>
                    Log In
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        className={classes.input}
                        label="Email"
                        variant="outlined"
                        type="email"
                        name="email"
                        fullWidth
                        required
                        value={email}
                        onChange={onEmailChange}
                    />
                    <TextField
                        className={classes.input}
                        label="Password"
                        variant="outlined"
                        type="password"
                        name="password"
                        fullWidth
                        required
                        value={password}
                        onChange={onPasswordChange}
                    />
                    <Button type="submit" variant="contained" size="large" color="primary" fullWidth>
                        Log In
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}

export default LoginPage;
