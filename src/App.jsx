import React from 'react';
import { Box } from '@mui/material';
import {
    BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { tss } from 'tss-react/mui';
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

const useStyles = tss.create(({ theme }) => ({
    sideBar: {
        width: '300px',
        backgroundColor: theme.palette.background.default,
        height: '100%',

    },
    layout: {
        display: 'flex',
        height: '100vh',
        backgroundColor: theme.palette.background.light,
    },
}));

function App({ basename = '' }) {
    const { classes } = useStyles();
    return (
        <CacheProvider value={cache}>
            <BrowserRouter basename={basename}>
                <div className={classes.layout}>
                    <Box className={classes.sideBar}>
                        <Navigation />
                    </Box>
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/orders" element={<OrdersPage />} />
                        <Route path="/pages" element={<PagesPage />} />
                        <Route path="/users" element={<UsersPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </CacheProvider>
    );
}

export default App;
