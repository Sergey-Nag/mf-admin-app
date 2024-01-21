import React from 'react';
import { tss } from 'tss-react/mui';

const statusColor = {
    NEW: 'yellow',
    VERIFIED: 'green',
    PACKED: 'lightblue',
    SHIPPED: 'purple',
    DELIVERED: '#0ADFD2',
    CANCELED: 'grey',
    RETURNED: 'red',

};

const useStyles = tss.create(({ value, theme }) => ({
    status: {
        borderRadius: '37px',
        backgroundColor: statusColor[value],
        fontWeight: 'bold',
        padding: theme.spacing(1, 2),
    },
    statusText: {
        color: 'grey',
        opacity: '0.5',
        mixBlendMode: 'multiply',
    },
}));

function StatusCellRenderer({ value }) {
    const { classes } = useStyles({ value });
    return (
        <div className={classes.status}>
            <span className={classes.statusText}>{value}</span>
        </div>
    );
}

export default StatusCellRenderer;
