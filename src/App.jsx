import React from 'react';
import {
    BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { DashboardPage } from './pages/dashboard-page/DashboardPage';
import styles from './App.css';

function Main() {
    return (
        <div className={styles.app}>
            <h2>Admin Panel</h2>
            <Link to="/dashboard">To dashboard</Link>
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
