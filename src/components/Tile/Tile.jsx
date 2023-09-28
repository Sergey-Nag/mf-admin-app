import React from 'react';
import { tss } from 'tss-react/mui';
import { Grid } from '@mui/material';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

const useStyles = tss.create(({ theme }) => ({
    tile: {
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        background: theme.palette.grey[300],
        height: '100%',
    },
    link: {
        display: 'block',
        color: theme.palette.primary.main,
        textDecoration: 'none',
        height: '100%',
    },
    textColor: {
        color: theme.palette.grey[900],
    },
}
));

function Tile({
    slots, className, children, link,
}) {
    const { classes } = useStyles();
    const xl = slots === 1 ? 3 : 6;
    const md = slots === 1 ? 4 : 8;
    const sm = slots === 1 ? 6 : 12;
    if (link) {
        return (
            <Grid item xl={xl} md={md} sm={sm} className={className}>
                <NavLink to={link} className={classes.link}>
                    <div className={cx(classes.tile)}>{children}</div>
                </NavLink>
            </Grid>
        );
    }
    return (
        <Grid item xl={xl} md={md} sm={sm} className={className}>
            <div className={cx(classes.tile, classes.textColor)}>{children}</div>
        </Grid>
    );
}
export default Tile;
