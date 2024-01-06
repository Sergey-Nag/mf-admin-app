import React from 'react';
import { tss } from 'tss-react/mui';
import DataGridCell from '../DataGridCell/DataGridCell';
import CheckboxCellRenderer from '../../cell-renderers/CheckboxCellRenderer/CheckboxCellRenderer';
import { DATAGRID_CHECKBOX_COLUMN_WIDTH } from '../../constants';

const useStyles = tss.create(() => ({
    row: {
        justifyContent: 'space-between',
    },
}));

function DataGridRow({
    cells, id, className, selected, onSelectionChanged, cellHeight, rowData,
}) {
    const { classes, cx } = useStyles();
    return (
        <tr className={cx(classes.row, className)}>
            <DataGridCell
                width={DATAGRID_CHECKBOX_COLUMN_WIDTH}
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
                    height={cellHeight}
                    style={cell.style}
                    rowData={rowData}
                    valueGetter={cell.valueGetter}
                    title={cell.title}
                />
            ))}
        </tr>
    );
}

export default DataGridRow;
