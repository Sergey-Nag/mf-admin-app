import React from 'react';
import { tss } from 'tss-react/mui';

const useStyles = tss.withNestedSelectors().create(({ theme, classes, width }) => ({
    cell: {
        padding: `0 ${theme.spacing(1)}`,
        [`&:last-child .${classes.innerContent}`]: {
            borderRight: 'none',
        },
        width,
    },
    innerContent: {
        borderRight: `1px solid ${theme.palette.grey[400]}`,
        color: theme.palette.grey[700],
        fontSize: '.9rem',
    },
}
));

function DataGridHeaderCell({
    value, width, cellRenderer, onChange,
}) {
    // const { headerName, colDef } = cell ?? {};
    const { classes } = useStyles({ width });
    const content = typeof cellRenderer === 'function' ? cellRenderer({ value, onChange }) : value;
    // const CellRenderer = colDef?.headerCellRenderer;

    return (
        <th className={classes.cell}>
            <div className={classes.innerContent}>
                {content}
            </div>
        </th>
    );
}

export default DataGridHeaderCell;
