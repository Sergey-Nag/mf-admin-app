import { useEffect, useMemo, useState } from 'react';
import { makeUniqueId } from '@apollo/client/utilities';
import { getValueByPath } from '../../../utils/getValueByPath';

export default function useDataGrid({ rowData, colDefs, onSelectionChanged }) {
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        setSelected([]);
    }, [rowData]);

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
        setSelected(newSelected);
    };

    const handleAllSelectedChanged = (checked) => {
        const newSelected = checked ? rows.map((x) => x.id) : [];
        setSelected(newSelected);
    };

    useEffect(() => {
        onSelectionChanged && onSelectionChanged(
            selected.map((rId) => rows.find((x) => x.id === rId).rowData),
        );
    }, [selected, onSelectionChanged]);

    return {
        rows, selected, handleSelectionChanged, handleAllSelectedChanged,
    };
}
