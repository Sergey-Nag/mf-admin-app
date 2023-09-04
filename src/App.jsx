import React from 'react';
import {
    BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Dashboard } from './pages/dashboard/Dashboard';
import { DashboardPage } from './pages/dashboard-page/DashboardPage';
import styles from './App.css';

function Main() {
    return (
        <div className={styles.app}>
            <Box sx={{
                backgroundColor: 'red',
            }}
            >
                <h2>Admin Panel</h2>
                <Link to="/dashboard">To dashboard</Link>
                <Button sx={{
                    background: 'green',
                }}
                >BTN
                </Button>
            </Box>
        </div>
    );
}

function App({ basename = '' }) {
    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path=":id" element={<DashboardPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
