import React from 'react';
import { tss } from 'tss-react/mui';

const useStyles = tss.create(() => ({
    row: {
        justifyContent: 'space-between',
    },
}));

function DataGridRow({ children, className }) {
    const { classes, cx } = useStyles();
    return (
        <tr className={cx(classes.row, className)}>{children}</tr>
    );
}

export default DataGridRow;
