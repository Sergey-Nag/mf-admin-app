import { ApolloProvider } from '@apollo/client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import React from 'react';
import {
    BrowserRouter,
    Navigate,
    Route, Routes,
} from 'react-router-dom';
import client from './api/client';
import AuthProtected from './components/AuthProtected/AuthProtected';
import DashboardPage from './pages/dashboard/DashboardPage';
import LoginPage from './pages/login/LoginPage';
import NotFoundPage from './pages/not-found/NotFoundPage';
import OrdersPage from './pages/orders/OrdersPage';
import PagesPage from './pages/pages/PagesPage';
import ProductsPage from './pages/products/ProductsPage';
import UsersPage from './pages/users/UsersPage';
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
