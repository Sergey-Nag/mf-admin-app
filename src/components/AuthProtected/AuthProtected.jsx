import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';
import Layout from '../Layout/Layout';

function AuthProtected() {
    const { isAuthorized } = useAuth();

    if (!isAuthorized) {
        return <Navigate to="/login" />;
    }

    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

export default AuthProtected;
