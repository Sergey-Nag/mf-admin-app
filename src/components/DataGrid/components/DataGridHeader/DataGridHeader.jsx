import React from 'react';
import { tss } from 'tss-react/mui';
import DataGridRow from '../DataGridRow/DataGridRow';

const useStyles = tss.create(({ theme }) => ({
    gridHeader: {
        paddingBottom: theme.spacing(1),
        background: theme.palette.grey[300],
    },
}
));

function DataGridHeader({ children }) {
    const { classes } = useStyles();
    return (
        <DataGridRow className={classes.gridHeader}>
            {children}
        </DataGridRow>
    );
}

export default DataGridHeader;
