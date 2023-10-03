import React from 'react';
import {
    BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ApolloProvider } from '@apollo/client';
import PagesPage from './pages/pages/PagesPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import UsersPage from './pages/users/UsersPage';
import OrdersPage from './pages/orders/OrdersPage';
import ProductsPage from './pages/products/ProductsPage';
import { Navigation } from './components/Navigation/Navigation';
import NotFoundPage from './pages/not-found/NotFoundPage';
import client from './api/client';
import LoginPage from './pages/login/LoginPage';
import AuthProtected from './components/AuthProtected/AuthProtected';
import AuthProvider from './providers/AuthProvider';


const cache = createCache({
    key: 'admin',
});

function App({ basename = '' }) {
    return (
        <CacheProvider value={cache}>
            <ApolloProvider client={client}>
                <AuthProvider>
                    <BrowserRouter basename={basename}>
                        <Routes>
                            <Route element={<AuthProtected />}>
                                <Route path="/" element={<Navigate to="/dashboard" />} />
                                <Route path="/dashboard" element={<DashboardPage />} />
                                <Route path="/products" element={<ProductsPage />} />
                                <Route path="/orders" element={<OrdersPage />} />
                                <Route path="/pages" element={<PagesPage />} />
                                <Route path="/users" element={<UsersPage />} />
                                <Route path="/not-found-page" element={<NotFoundPage />} />
                                <Route path="*" element={<Navigate to="/not-found-page" />} />
                            </Route>
                            <Route path="/" element={<Navigate to="/login" />} />
                            <Route path="/login" element={<LoginPage />} />
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
            </ApolloProvider>
        </CacheProvider>
    );
}

export default App;
