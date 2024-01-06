import React from 'react';
import { tss } from 'tss-react/mui';
import DataGridCell from '../DataGridCell/DataGridCell';
import CheckboxCellRenderer from '../../cell-renderers/CheckboxCellRenderer/CheckboxCellRenderer';

const useStyles = tss.create(() => ({
    row: {
        justifyContent: 'space-between',
        height: 90,
    },
}));

function DataGridRow({
    cells, id, className, selected, onSelectionChanged,
}) {
    const { classes, cx } = useStyles();
    return (
        <tr className={cx(classes.row, className)}>
            <DataGridCell
                width={50}
                value={selected}
                onChange={(_, checked) => onSelectionChanged && onSelectionChanged(checked, id)}
                cellRenderer={CheckboxCellRenderer}
            />
            {cells.map((cell) => (
                <DataGridCell
                    key={cell.id}
                    value={cell.value}
                    width={cell.width}
                    cellRenderer={cell.cellRenderer}
                />
            ))}
        </tr>
    );
}

export default DataGridRow;
