import { ApolloProvider } from '@apollo/client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import React from 'react';
import {
    BrowserRouter,
    Navigate,
    Route, Routes,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import PagesPage from './pages/pages/PagesPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import CustomersPage from './pages/customers/CustomersPage';
import OrdersPage from './pages/orders/OrdersPage';
import ProductsPage from './pages/products/ProductsPage';
import client from './api/client';
import AuthProtected from './components/AuthProtected/AuthProtected';
import LoginPage from './pages/login/LoginPage';
import NotFoundPage from './pages/not-found/NotFoundPage';
import AuthProvider from './providers/AuthProvider';
import appTheme from './theme';
import ProductDetailsPage from './pages/product-details/ProductDetailsPage';
import NewProductPage from './pages/new-product/NewProductPage';
import UserSettings from './pages/user-settings/UserSettingsPage';

const cache = createCache({
    key: 'admin',
});

function App({ basename = '', theme = appTheme }) {
    return (
        <ThemeProvider theme={theme}>
            <CacheProvider value={cache}>
                <ApolloProvider client={client}>
                    <AuthProvider>
                        <BrowserRouter basename={basename}>
                            <Routes>
                                <Route element={<AuthProtected />}>
                                    <Route path="/user-settings" element={<UserSettings />} />
                                    <Route path="/" element={<Navigate to="/dashboard" />} />
                                    <Route path="/dashboard" element={<DashboardPage />} />
                                    <Route path="/products" element={<ProductsPage />} />
                                    <Route path="/products/new" element={<NewProductPage />} />
                                    <Route path="/products/:id" element={<ProductDetailsPage />} />
                                    <Route path="/orders" element={<OrdersPage />} />
                                    <Route path="/pages" element={<PagesPage />} />
                                    <Route path="/customers" element={<CustomersPage />} />
                                    <Route path="/not-found" element={<NotFoundPage />} />
                                    <Route path="*" element={<Navigate to="/not-found" />} />
                                </Route>
                                <Route path="/" element={<Navigate to="/login" />} />
                                <Route path="/login" element={<LoginPage />} />
                            </Routes>
                        </BrowserRouter>
                    </AuthProvider>
                </ApolloProvider>
            </CacheProvider>
        </ThemeProvider>
    );
}

export default App;
