import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductLinkCellRenderer({ rowData }) {
    return (
        <Link to={`/products/${rowData.id}`}>
            {rowData.name}
        </Link>
    );
}
