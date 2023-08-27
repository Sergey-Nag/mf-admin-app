import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Dashboard.css';

export function Dashboard() {
    return (
        <>

            Dashboard page
            <Link to="/">Main</Link>
        </>

    );
}
