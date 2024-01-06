import React from 'react';
import { tss } from 'tss-react/mui';

const useStyles = tss.create(({ theme, width, height }) => ({
    cell: {
        border: 'none',
        padding: theme.spacing(1),
        width: width ? `${width}px` : 'auto',
        height: height ?? 100,
    },
}
));
function DataGridCell({
    value: val,
    width,
    height,
    style,
    cellRenderer,
    className,
    onChange,
    valueGetter,
    rowData,
    title: ttl,
}) {
    const { classes, cx } = useStyles({ width, height });

    const value = valueGetter ? valueGetter(val, rowData) : val;
    const content = typeof cellRenderer === 'function' ? cellRenderer({ value, rowData, onChange }) : value;
    const title = typeof ttl === 'function' ? ttl(val, rowData) : ttl;

    return (
        <td className={cx(classes.cell, className)} style={style} title={title}>
            {content}
        </td>
    );
}

export default DataGridCell;
