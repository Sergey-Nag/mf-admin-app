import React from 'react';
import { tss } from 'tss-react/mui';
import { ORDER_STATUS } from '../../../constants/api';

const statusColor = {
    [ORDER_STATUS.NEW]: 'yellow',
    [ORDER_STATUS.VERIFIED]: 'green',
    [ORDER_STATUS.PACKED]: 'lightblue',
    [ORDER_STATUS.SHIPPED]: 'purple',
    [ORDER_STATUS.DELIVERED]: '#0ADFD2',
    [ORDER_STATUS.CANCELED]: 'grey',
    [ORDER_STATUS.RETURNED]: 'red',
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
