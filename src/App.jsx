import React from 'react';
import { Grid } from '@mui/material';
import {
    BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import Users from './pages/users/Users';
import Orders from './pages/orders/Orders';
import ProductsPage from './pages/products/Products';
import SidebarPages from './pages/sidebar-pages/SidebarPages';
import { Navigation } from './components/Navigation/Navigation';

function App({ basename = '' }) {
    return (
        <BrowserRouter basename={basename}>
            <Grid container>
                <div style={{ width: '100%', display: 'flex' }}>
                    <Grid item xs={2}>
                        <div>
                            <Navigation />
                        </div>
                    </Grid>
                    <Grid item xs={10}>
                        <div style={{ height: '100vh', backgroundColor: '#535da8' }}>
                            <Routes>
                                <Route path="/" element={<Navigate to="/dashboard" />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/products" element={<ProductsPage />} />
                                <Route path="/orders" element={<Orders />} />
                                <Route path="/pages" element={<SidebarPages />} />
                                <Route path="/users" element={<Users />} />
                            </Routes>
                        </div>
                    </Grid>
                </div>
            </Grid>
        </BrowserRouter>
    );
}

export default App;
