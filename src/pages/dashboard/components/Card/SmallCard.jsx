import React from 'react';
import { tss } from 'tss-react/mui';
import { Typography } from '@mui/material';
import Tile from '../../../../components/Tile/Tile';

const useStyles = tss.create(({ theme }) => ({
    card: {
        height: '300px',
    },
    titleMargin: {
        marginBottom: theme.spacing(1),
    },

}
));

function SmallCard({ title, link, children }) {
    const { classes } = useStyles();
    return (
        <Tile className={classes.card} slots={1} link={link}>
            <div className={classes.titleMargin}><Typography>{title}</Typography></div>
            <div>{children}</div>
        </Tile>
    );
}

export default SmallCard;
