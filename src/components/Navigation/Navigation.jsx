import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from './Navigation.css';

export function Navigation() {
    const applyActive = (args) => {
        if (args.isActive) {
            return styles['btn-active'];
        }
    };

    return (
        <ButtonGroup className={styles['side-nav-height']} fullWidth size="large" color="primary" orientation="vertical" variant="contained" aria-label="outlined primary button group">
            <NavLink className={applyActive} to="/dashboard"><Button className={styles['side-nav-btns']}>Dashboard</Button></NavLink>
            <NavLink className={applyActive} to="/products"><Button className={styles['side-nav-btns']}>Products</Button></NavLink>
            <NavLink className={applyActive} to="/orders"><Button className={styles['side-nav-btns']}>Orders</Button></NavLink>
            <NavLink className={applyActive} to="/pages"><Button className={styles['side-nav-btns']}>Pages</Button></NavLink>
            <NavLink className={applyActive} to="/users"><Button className={styles['side-nav-btns']}>Users</Button></NavLink>
        </ButtonGroup>
    );
}
