import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import { tss } from 'tss-react/mui';
import { useAuth } from '../../providers/AuthProvider';

const useStyles = tss.withNestedSelectors().create(({ theme, classes }) => {
    console.log(theme);
    return {
        btnGroup: {
            width: '300px',
            height: '100%',
            padding: theme.spacing(2),
            paddingTop: 0,
        },
        btn: {
            marginBottom: theme.spacing(1),
        },
        activeLink: {
            [`& .${classes.btn}`]: {
                backgroundColor: theme.palette.primary.light,
            },
        },
        navWrapp: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
    };
});

export function Navigation() {
    const { classes } = useStyles();
    const { logout } = useAuth();

    const applyActive = (args) => {
        if (args.isActive) {
            return classes.activeLink;
        }
    };

    return (
        <ButtonGroup className={classes.btnGroup} fullWidth size="medium" color="primary" orientation="vertical" variant="contained" aria-label="outlined primary button group">
            <div className={classes.navWrapp}>
                <div>
                    <NavLink className={applyActive} to="/dashboard"><Button className={classes.btn}>Dashboard</Button></NavLink>
                    <NavLink className={applyActive} to="/products"><Button className={classes.btn}>Products</Button></NavLink>
                    <NavLink className={applyActive} to="/orders"><Button className={classes.btn}>Orders</Button></NavLink>
                    <NavLink className={applyActive} to="/pages"><Button className={classes.btn}>Pages</Button></NavLink>
                    <NavLink className={applyActive} to="/customers"><Button className={classes.btn}>Customers</Button></NavLink>
                </div>
                <div>
                    <Button onClick={logout}>Log out</Button>
                </div>
            </div>
        </ButtonGroup>
    );
}
