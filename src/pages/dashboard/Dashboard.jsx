import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { tss } from 'tss-react/mui';
import styles from './Dashboard.css';

const useStyles = tss.create(({ theme }) => {
    console.log(theme);
    return {
        container: {
            height: '100vh',
            backgroundColor: theme.palette.background.default,
        },
        btn: {
            backgroundColor: theme.palette.primary.light,
        },
        gap: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        font: {
            ...theme.typography.body1,
            fontWeight: theme.typography.fontWeightBold,
        },
    };
});

export function Dashboard() {
    const { classes } = useStyles();
    return (
        <div className={classes.container}>
            <span className={classes.font}>
                Dashboard page
            </span>
            <ul className={styles.list}>
                <li>List 1</li>
                <li>List 2</li>
                <li>List 3</li>
                <li>List 4</li>
            </ul>
            <Button
                sx={({ palette }) => ({
                    backgroundColor: palette.secondary.light,
                    color: palette.secondary.contrastText,
                })}
                fullWidth
            >
                Btn sx
            </Button>
            <div className={classes.gap} />
            <Button className={cx(classes.btn, classes.font)} fullWidth>
                Btn classes
            </Button>
            <Link to="/">Main</Link>
        </div>
    );
}
