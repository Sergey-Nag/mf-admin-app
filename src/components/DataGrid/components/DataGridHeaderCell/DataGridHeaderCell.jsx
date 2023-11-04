import React from 'react';
import { tss } from 'tss-react/mui';

const useStyles = tss.create(({ theme, width }) => ({
    cell: {
        border: 'none',
        padding: theme.spacing(1),
        width: width ? `${width}px` : 'auto',
    },
}
));
function DataGridHeaderCell({ children, width }) {
    const { classes } = useStyles({ width });
    return (
        <th className={classes.cell}>{children}
        </th>
    );
}

export default DataGridHeaderCell;
