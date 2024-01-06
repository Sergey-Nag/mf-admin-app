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
function DataGridCell({
    value, width, cellRenderer, className, onChange,
}) {
    const { classes, cx } = useStyles({ width });
    const content = typeof cellRenderer === 'function' ? cellRenderer({ value, onChange }) : value;
    return (
        <td className={cx(classes.cell, className)}>
            {content}
        </td>
    );
}

export default DataGridCell;
