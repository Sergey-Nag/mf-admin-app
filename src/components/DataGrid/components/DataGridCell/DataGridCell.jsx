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
function DataGridCell({ children, width }) {
    const { classes } = useStyles({ width });
    return (
        <td className={classes.cell}>{children}
        </td>
    );
}

export default DataGridCell;
