import React from 'react';
import { Checkbox } from '@mui/material';
import { tss } from 'tss-react/mui';
import { Link } from 'react-router-dom';
import DataGridHeader from './components/DataGridHeader/DataGridHeader';
import DataGridHeaderCell from './components/DataGridHeaderCell/DataGridHeaderCell';
import DataGridCell from './components/DataGridCell/DataGridCell';
import DataGridRow from './components/DataGridRow/DataGridRow';
import DataGridFooter from './components/DataGridFooter/DataGridFooter';

const useStyles = tss.create(() => ({
    dataGrid: {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'center',
    },
}));
function DataGrid() {
    const { classes } = useStyles();
    return (
        <div>
            <table className={classes.dataGrid}>
                <DataGridHeader>
                    <DataGridHeaderCell width={20}><Checkbox /></DataGridHeaderCell>
                    <DataGridHeaderCell>Photo</DataGridHeaderCell>
                    <DataGridHeaderCell>Name</DataGridHeaderCell>
                    <DataGridHeaderCell>Categories</DataGridHeaderCell>
                    <DataGridHeaderCell>Price</DataGridHeaderCell>
                    <DataGridHeaderCell>Avallable</DataGridHeaderCell>
                    <DataGridHeaderCell>Updated</DataGridHeaderCell>
                    <DataGridHeaderCell>1</DataGridHeaderCell>
                </DataGridHeader>
                <DataGridRow>
                    <DataGridCell width={20}><Checkbox /></DataGridCell>
                    <DataGridCell><img src="" alt="Product" /></DataGridCell>
                    <DataGridCell><Link to="/">Product name</Link></DataGridCell>
                    <DataGridCell>Clothes</DataGridCell>
                    <DataGridCell>10$</DataGridCell>
                    <DataGridCell>100</DataGridCell>
                    <DataGridCell>10.10.2020</DataGridCell>
                    <DataGridCell>1</DataGridCell>
                </DataGridRow>
                <DataGridRow>
                    <DataGridCell width={20}><Checkbox /></DataGridCell>
                    <DataGridCell><img src="" alt="Product" /></DataGridCell>
                    <DataGridCell><Link to="/">Product name</Link></DataGridCell>
                    <DataGridCell>Clothes</DataGridCell>
                    <DataGridCell>10$</DataGridCell>
                    <DataGridCell>100</DataGridCell>
                    <DataGridCell>10.10.2020</DataGridCell>
                    <DataGridCell>1</DataGridCell>
                </DataGridRow>
            </table>
            <DataGridFooter />
        </div>
    );
}

export default DataGrid;
