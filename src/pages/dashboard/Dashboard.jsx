import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export function Dashboard() {
    const items = ['0', '1', '2', '3', '4'];
    return (
        <>
            <h2>Dashboard</h2>
            <ol>
                {items.map((id) => (
                    <li key={id}>
                        <Link to={id}>
                            Go to a page №
                            {id}
                        </Link>
                    </li>
                ))}
            </ol>
            <hr />
            <Outlet />
            <Link to="/">Got to main</Link>
        </>
    );
}
