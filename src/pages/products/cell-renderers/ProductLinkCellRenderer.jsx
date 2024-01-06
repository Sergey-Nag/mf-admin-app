import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductLinkCellRenderer({ rowData }) {
    return (
        <NavLink to={`/products/${rowData.alias}`}>
            {rowData.name}
        </NavLink>
    );
}
