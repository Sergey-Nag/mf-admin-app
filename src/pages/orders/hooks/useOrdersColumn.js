import { useMemo } from 'react';
import { dateFormat } from '../../../utils/dateFormat';
import StatusCellRenderer from '../cell-renderers/StatusCellRenderer';
import OrdersLinkCellRenderer from '../cell-renderers/OrdersLinkCellRenderer';

export function useOrdersColumn() {
    const colDefs = useMemo(() => [
        {
            field: 'id',
            headerName: 'id',
            width: 150,
            cellRenderer: OrdersLinkCellRenderer,
            headerStyle: {
                textAlign: 'left',
            },
        },
        {
            field: 'orderProducts',
            headerName: 'Products',
            valueGetter: (value) => value
                .map((x) => (x.product ? x.product.name : ''))
                .filter((name) => name.trim() !== '')
                .join(', '),
        },
        {
            field: 'shippingAddress',
            headerName: 'Adress',
        },
        {
            field: 'customer.phone',
            headerName: 'Phone',

        },
        {
            field: 'totalPrice',
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
            field: 'createdISO',
            headerName: 'Placed',
            style: {
                textAlign: 'left',
            },
            headerStyle: {
                textAlign: 'left',
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
            field: 'currentStatus',
            headerName: 'Status',
            style: {
                textAlign: 'center',
            },
            cellRenderer: StatusCellRenderer,
            headerStyle: {
                textAlign: 'center',
            },
        },
    ], []);

    return { colDefs };
}
