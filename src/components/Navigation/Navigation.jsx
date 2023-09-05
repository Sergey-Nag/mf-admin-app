import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import { tss } from 'tss-react/mui';

const useStyles = tss.withNestedSelectors().create(({ theme, classes }) => {
    console.log(theme);
    return {
        btnGroup: {
            height: '100%',
            padding: theme.spacing(1),
        },
        btn: {
            marginBottom: theme.spacing(1),
        },
        activeLink: {
            [`& .${classes.btn}`]: {
                backgroundColor: theme.palette.primary.light,
            },
        },
    };
});

export function Navigation() {
    const { classes } = useStyles();

    const applyActive = (args) => {
        if (args.isActive) {
            return classes.activeLink;
        }
    };

    return (
        <ButtonGroup className={classes.btnGroup} fullWidth size="large" color="primary" orientation="vertical" variant="contained" aria-label="outlined primary button group">
            <NavLink className={applyActive} to="/dashboard"><Button className={classes.btn}>Dashboard</Button></NavLink>
            <NavLink className={applyActive} to="/products"><Button className={classes.btn}>Products</Button></NavLink>
            <NavLink className={applyActive} to="/orders"><Button className={classes.btn}>Orders</Button></NavLink>
            <NavLink className={applyActive} to="/pages"><Button className={classes.btn}>Pages</Button></NavLink>
            <NavLink className={applyActive} to="/users"><Button className={classes.btn}>Users</Button></NavLink>
        </ButtonGroup>
    );
}
