import { useMemo, useState } from 'react';

export default function useDataGrid({ rowData, colDefs, onSelectionChanged }) {
    const [selected, setSelected] = useState([]);
    const rows = useMemo(() => rowData.map((row) => {
        const cells = colDefs.map((colDef) => {
            const { field } = colDef;
            return {
                id: field,
                value: row[field],
                cellRenderer: colDef.cellRenderer,
            };
        });
        return {
            id: row.id,
            row,
            cells,
        };
    }), [rowData, colDefs]);

    const handleSelectionChanged = (checked, id) => {
        const newSelected = checked ? [...selected, id] : selected.filter((x) => x !== id);
        onSelectionChanged && onSelectionChanged(
            newSelected.map((rId) => rows.find((x) => x.id === rId).row),
        );
        setSelected(newSelected);
    };

    const handleAllSelectedChanged = (checked) => {
        const newSelected = checked ? rows.map((x) => x.id) : [];
        onSelectionChanged && onSelectionChanged(
            newSelected.map((rId) => rows.find((x) => x.id === rId).row),
        );
        setSelected(newSelected);
    };

    return {
        rows, selected, handleSelectionChanged, handleAllSelectedChanged,
    };
}
