import React from 'react';
import { Grid } from '@mui/material';
import {
    BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { DashboardPage } from './pages/dashboard-page/DashboardPage';
import styles from './App.css';
import Users from './pages/users/Users';
import Orders from './pages/orders/Orders';
import ProductsPage from './pages/products/Products';
import SidebarPages from './pages/sidebar-pages/SidebarPages';

function Main() {
    return (
        <div className={styles.app}>
            <h2>Admin Panel</h2>
            <Link to="/dashboard" style={{ color: 'white' }}>To dashboard</Link>
        </div>
    );
}

function App({ basename = '' }) {
    return (
        <BrowserRouter basename={basename}>
            <Grid container>
                <div style={{ width: '100%', display: 'flex' }}>
                    <Grid item xs={2}>
                        <div>
                            <Dashboard />
                        </div>
                    </Grid>
                    <Grid item xs={10}>
                        <div style={{ height: '100vh', backgroundColor: '#535da8' }}>
                            <Routes>
                                <Route path="/" element={<Main />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/DashboardPage" element={<DashboardPage />} />
                                <Route path="/ProductsPage" element={<ProductsPage />} />
                                <Route path="/Orders" element={<Orders />} />
                                <Route path="/SidebarPages" element={<SidebarPages />} />
                                <Route path="/Users" element={<Users />} />
                            </Routes>
                        </div>
                    </Grid>
                </div>
            </Grid>
        </BrowserRouter>
    );
}

export default App;
