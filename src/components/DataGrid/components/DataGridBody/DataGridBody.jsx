import React from 'react';
import DataGridRow from '../DataGridRow/DataGridRow';

function DataGridBody({
    rows, selected = [], onSelectionChanged, cellHeight,
}) {
    return (
        <tbody>
            {rows.map((row) => (
                <DataGridRow
                    key={row.id}
                    id={row.id}
                    cells={row.cells}
                    selected={selected.includes(row.id)}
                    onSelectionChanged={onSelectionChanged}
                    cellHeight={cellHeight}
                    rowData={row.rowData}
                />
            ))}
        </tbody>
    );
}

export default DataGridBody;
