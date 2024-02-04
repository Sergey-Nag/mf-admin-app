import React from 'react';
import { tss } from 'tss-react/mui';
import { ORDER_STATUS } from '../../../constants/api';

const statusColor = {
    [ORDER_STATUS.NEW]: '#ffe200',
    [ORDER_STATUS.VERIFIED]: '#04a904',
    [ORDER_STATUS.PACKED]: '#70dcff',
    [ORDER_STATUS.SHIPPED]: '#aa07aa',
    [ORDER_STATUS.DELIVERED]: '#0ADFD2',
    [ORDER_STATUS.CANCELED]: '#808080',
    [ORDER_STATUS.RETURNED]: '#ff0000',
};

const useStyles = tss.create(({ value, theme }) => ({
    status: {
        borderRadius: '37px',
        backgroundColor: statusColor[value],
        fontWeight: 'bold',
        padding: theme.spacing(1, 2),
    },
    statusText: {
        color: theme.palette.getContrastText(statusColor[value]),
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
