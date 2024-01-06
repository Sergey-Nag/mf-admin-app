import { useMemo, useState } from 'react';
import { makeUniqueId } from '@apollo/client/utilities';
import { getValueByPath } from '../../../utils/getValueByPath';

export default function useDataGrid({ rowData, colDefs, onSelectionChanged }) {
    const [selected, setSelected] = useState([]);
    const rows = useMemo(() => (
        rowData
            ? rowData.map((row) => {
                const cells = colDefs.map((colDef) => {
                    const { field } = colDef;
                    return {
                        id: makeUniqueId('cell'),
                        value: field && getValueByPath(row, field),
                        cellRenderer: colDef.cellRenderer,
                        style: colDef.style,
                        valueGetter: colDef.valueGetter,
                        title: colDef.title,
                    };
                });
                return {
                    id: row.id,
                    rowData: row,
                    cells,
                };
            })
            : []
    ), [rowData, colDefs]);

    const handleSelectionChanged = (checked, id) => {
        const newSelected = checked ? [...selected, id] : selected.filter((x) => x !== id);
        onSelectionChanged && onSelectionChanged(
            newSelected.map((rId) => rows.find((x) => x.id === rId).rowData),
        );
        setSelected(newSelected);
    };

    const handleAllSelectedChanged = (checked) => {
        const newSelected = checked ? rows.map((x) => x.id) : [];
        onSelectionChanged && onSelectionChanged(
            newSelected.map((rId) => rows.find((x) => x.id === rId).rowData),
        );
        setSelected(newSelected);
    };

    return {
        rows, selected, handleSelectionChanged, handleAllSelectedChanged,
    };
}
