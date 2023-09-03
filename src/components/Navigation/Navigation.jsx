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
        <ButtonGroup style={{ width: '100%', margin: '0px' }} size="large" color="primary" orientation="vertical" variant="contained" aria-label="outlined primary button group">
            <NavLink className={applyActive} to="/dashboard"><Button style={{ margin: '3px', width: '97%' }}>Dashboard</Button></NavLink>
            <NavLink className={applyActive} to="/products"><Button style={{ margin: '3px', width: '97%' }}>Products</Button></NavLink>
            <NavLink className={applyActive} to="/orders"><Button style={{ margin: '3px', width: '97%' }}>Orders</Button></NavLink>
            <NavLink className={applyActive} to="/pages"><Button style={{ margin: '3px', width: '97%' }}>Pages</Button></NavLink>
            <NavLink className={applyActive} to="/users"><Button style={{ margin: '3px', width: '97%' }}>Users</Button></NavLink>
        </ButtonGroup>
    );
}
