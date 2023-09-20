import React from 'react';
import { tss } from 'tss-react/mui';
import { Grid } from '@mui/material';
import cx from 'classnames';

const useStyles = tss.create(({ theme }) => ({
    tile: {
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        background: theme.palette.grey[300],
    },
}
));

function Tile({ slots, children, className }) {
    const { classes } = useStyles();
    const xl = slots === 1 ? 3 : 4;
    const md = slots === 1 ? 4 : 8;
    const sm = slots === 1 ? 6 : 12;
    return (
        <Grid item xl={xl} md={md} sm={sm}>
            <div className={cx(classes.tile, className)}>
                {children}
            </div>
        </Grid>

    );
}
export default Tile;
