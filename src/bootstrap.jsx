import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import App from './App';
import theme from './theme';

loadDevMessages();
loadErrorMessages();

const container = document.getElementById('root');

const root = createRoot(container);
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
);
