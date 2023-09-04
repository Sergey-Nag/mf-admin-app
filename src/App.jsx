import React from 'react';
import {
    BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Dashboard } from './pages/dashboard/Dashboard';
import { DashboardPage } from './pages/dashboard-page/DashboardPage';
import styles from './App.css';

function Main() {
    return (
        <div className={styles.app}>
            <Box
                sx={{
                    backgroundColor: 'red',
                }}
            >
                <h2>Admin Panel</h2>
                <Link to="/dashboard">To dashboard</Link>
                <Button
                    sx={{
                        background: 'green',
                    }}
                >
                    BTN
                </Button>
            </Box>
        </div>
    );
}

const cache = createCache({
    key: 'admin',
});

function App({ basename = '' }) {
    return (
        <CacheProvider value={cache}>
            <BrowserRouter basename={basename}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path=":id" element={<DashboardPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CacheProvider>
    );
}

export default App;
