import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { makeStyles } from 'tss-react/mui';
import styles from './Dashboard.css';

const useStyles = makeStyles()((theme) => {
    console.log(theme);
    return {
        btn: {
            backgroundColor: theme.palette.background.paper,
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
            <Button
                sx={({ palette }) => ({
                    backgroundColor: palette.background.paper,
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
        </>
    );
}
