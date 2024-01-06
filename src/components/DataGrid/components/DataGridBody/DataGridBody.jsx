import React from 'react';
import DataGridRow from '../DataGridRow/DataGridRow';

function DataGridBody({ rows, selected = [], onSelectionChanged }) {
    return (
        <tbody>
            {rows.map((row) => (
                <DataGridRow
                    key={row.id}
                    id={row.id}
                    cells={row.cells}
                    selected={selected.includes(row.id)}
                    onSelectionChanged={onSelectionChanged}
                />
            ))}
        </tbody>
    );
}

export default DataGridBody;
