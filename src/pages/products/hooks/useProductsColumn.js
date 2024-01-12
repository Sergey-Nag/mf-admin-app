import { useMemo } from 'react';
import ImageCellRenderer from '../../../components/DataGrid/cell-renderers/ImageCellRenderer/ImageCellRenderer';
import { dateFormat } from '../../../utils/dateFormat';
import AdminCellRenderer from '../cell-renderers/AdminCellRenderer';
import ProductLinkCellRenderer from '../cell-renderers/ProductLinkCellRenderer';

export function useProductsColumn() {
    const colDefs = useMemo(() => [
        {
            field: 'coverPhoto.url',
            headerName: 'Photo',
            width: 150,
            cellRenderer: ImageCellRenderer,
            headerStyle: {
                textAlign: 'center',
            },
        },
        {
            field: 'name',
            headerName: 'Name',
            cellRenderer: ProductLinkCellRenderer,
        },
        {
            field: 'categories',
            headerName: 'Categories',
            valueGetter: (value) => value.map((x) => x.name).join(', '),
        },
        {
            field: 'price',
            headerName: 'Price',
            style: {
                textAlign: 'right',
                fontWeight: 'bold',
                fontSize: '1rem',
            },
            headerStyle: {
                textAlign: 'right',
            },
            valueGetter: (value) => `$${Number(value).toFixed(2)}`,
        },
        {
            field: 'stock.amount',
            headerName: 'Available',
            style: {
                textAlign: 'right',
            },
            headerStyle: {
                textAlign: 'right',
            },
        },
        {
            field: 'createdISO',
            headerName: 'Created',
            style: {
                textAlign: 'right',
            },
            headerStyle: {
                textAlign: 'right',
            },
            valueGetter: (value) => {
                if (!value) return '—';

                if (new Date(value) < new Date()) {
                    return dateFormat(value, 'DD.MM.YY');
                }

                return dateFormat(value, 'HH:mm:ss');
            },
            title: (_, { createdISO }) => {
                return createdISO && new Date(createdISO).toLocaleString();
            },
        },
        {
            field: 'createdBy',
            cellRenderer: AdminCellRenderer,
            width: 60,
        },
    ], []);

    return { colDefs };
}
