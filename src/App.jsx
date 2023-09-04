import React from 'react';
import { Grid, StyledEngineProvider } from '@mui/material';
import {
    BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import Users from './pages/users/Users';
import Orders from './pages/orders/Orders';
import Products from './pages/products/Products';
import Pages from './pages/pages/Pages';
import { Navigation } from './components/Navigation/Navigation';

function App({ basename = '' }) {
    return (
        <StyledEngineProvider injectFirst>
            <BrowserRouter basename={basename}>
                <Grid container height="100vh" alignItems="stretch">
                    <Grid item xs={2}>
                        <Navigation />
                    </Grid>
                    <Grid item xs={10} sx={{ height: '100vh', backgroundColor: '#535da8' }}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/dashboard" />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/pages" element={<Pages />} />
                            <Route path="/users" element={<Users />} />
                        </Routes>
                    </Grid>
                </Grid>
            </BrowserRouter>
        </StyledEngineProvider>
    );
}

export default App;
