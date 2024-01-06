import React from 'react';
import { tss } from 'tss-react/mui';
import DataGridHeaderCell from '../DataGridHeaderCell/DataGridHeaderCell';
import CheckboxCellRenderer from '../../cell-renderers/CheckboxCellRenderer/CheckboxCellRenderer';
import { DATAGRID_CHECKBOX_COLUMN_WIDTH } from '../../constants';

const useStyles = tss.create(({ theme }) => ({
    gridHeader: {
        paddingBottom: theme.spacing(1),
        background: theme.palette.grey[300],
        height: 50,
    },
}));

function DataGridHeader({ colDefs, allSelected, onSelectionChanged }) {
    const { classes } = useStyles();
    return (
        <thead>
            <tr className={classes.gridHeader}>
                <DataGridHeaderCell
                    width={DATAGRID_CHECKBOX_COLUMN_WIDTH}
                    value={allSelected}
                    onChange={(_, checked) => {
                        onSelectionChanged && onSelectionChanged(checked);
                    }}
                    cellRenderer={CheckboxCellRenderer}
                />
                {colDefs.map((colDef) => (
                    <DataGridHeaderCell
                        key={colDef.field}
                        value={colDef.headerName}
                        width={colDef.width}
                        cellRenderer={colDef.headerCellRenderer}
                        style={colDef.headerStyle}
                    />
                ))}
            </tr>
        </thead>
    );
}

export default DataGridHeader;
