/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';

export default function OrdersLinkCellRenderer({ value }) {
    return (
        <Link to={`/orders/${value}`}>
            {value}
        </Link>
    );
}
