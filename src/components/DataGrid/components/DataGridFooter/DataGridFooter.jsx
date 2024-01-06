import React, { memo } from 'react';
import { tss } from 'tss-react/mui';
import DataGridPagination from '../DataGridPagination/DataGridPagination';

const useStyles = tss.create(({ theme }) => ({
    gridFooter: {
        width: '100%',
        marginTop: theme.spacing(1),
        background: theme.palette.grey[300],
        height: 50,
        '& .MuiTablePagination-toolbar': {
            minHeight: 50,
            color: theme.palette.grey[700],
        },
    },
}
));

function DataGridFooter() {
    const { classes } = useStyles();
    return (
        <div className={classes.gridFooter}><DataGridPagination /></div>
    );
}

export default memo(DataGridFooter);
