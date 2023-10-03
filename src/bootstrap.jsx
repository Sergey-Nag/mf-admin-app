import React from 'react';
import { createRoot } from 'react-dom/client';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import App from './App';

loadDevMessages();
loadErrorMessages();

const container = document.getElementById('root');

const root = createRoot(container);
root.render(
    <App />,
);
