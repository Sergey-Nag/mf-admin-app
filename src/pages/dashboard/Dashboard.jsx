import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from './Dashboard.css';

export function Dashboard() {
    return (
        <div style={{ height: '100vh', backgroundColor: '#121858' }}>
            <ButtonGroup style={{ width: '100%', margin: '0px' }} size="large" color="primary" orientation="vertical" variant="contained" aria-label="outlined primary button group">
                <Link to="/"><Button className={styles.btnMain} style={{ margin: '3px', width: '97%' }}>Main</Button></Link>
                <Link to="/DashboardPage"><Button style={{ margin: '3px', width: '97%' }}>Dashboard</Button></Link>
                <Link to="/ProductsPage"><Button style={{ margin: '3px', width: '97%' }}>Products</Button></Link>
                <Link to="/Orders"><Button style={{ margin: '3px', width: '97%' }}>Orders</Button></Link>
                <Link to="/SidebarPages"><Button style={{ margin: '3px', width: '97%' }}>Pages</Button></Link>
                <Link to="/Users"><Button style={{ margin: '3px', width: '97%' }}>Users</Button></Link>
            </ButtonGroup>
        </div>
    );
}
