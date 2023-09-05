import React from 'react';
import { Grid } from '@mui/material';
import {
    BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import PagesPage from './pages/pages/PagesPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import UsersPage from './pages/users/UsersPage';
import OrdersPage from './pages/orders/OrdersPage';
import ProductsPage from './pages/products/ProductsPage';
import { Navigation } from './components/Navigation/Navigation';

const cache = createCache({
    key: 'admin',
});

function App({ basename = '' }) {
    return (
        <CacheProvider value={cache}>
            <BrowserRouter basename={basename}>
                <Grid container height="100vh" alignItems="stretch">
                    <Grid item xs={2}>
                        <Navigation />
                    </Grid>
                    <Grid item xs={10} sx={{ height: '100vh', backgroundColor: '#535da8' }}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/dashboard" />} />
                            <Route path="/dashboard" element={<DashboardPage />} />
                            <Route path="/products" element={<ProductsPage />} />
                            <Route path="/orders" element={<OrdersPage />} />
                            <Route path="/pages" element={<PagesPage />} />
                            <Route path="/users" element={<UsersPage />} />
                        </Routes>
                    </Grid>
                </Grid>
            </BrowserRouter>
        </CacheProvider>
    );
}

export default App;
