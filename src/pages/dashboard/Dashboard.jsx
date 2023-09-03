import React from 'react';
import { Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import styles from './Dashboard.css';

export function Dashboard() {
    return (
        <>
            <span className={styles.dashboard}>
                Dashboard page
            </span>
            <ul className={styles.list}>
                <li>List 1</li>
                <li>List 2</li>
                <li>List 3</li>
                <li>List 4</li>
            </ul>
            <Button>
                Btn
            </Button>
            <Link to="/">Main</Link>
        </>
    );
}
