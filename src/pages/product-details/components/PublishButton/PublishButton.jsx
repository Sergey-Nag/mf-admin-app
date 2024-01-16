import { MenuItem, Select } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';
import { tss } from 'tss-react/mui';

const useStyles = tss.create(({ theme }) => ({
    select: {
        '& > .MuiSelect-select': {
            paddingTop: 6,
            paddingBottom: 6,
        },
        '& svg': {
            width: 20,
            marginRight: theme.spacing(0.5),
            verticalAlign: 'bottom',
        },
    },
    item: {
        display: 'flex',
        gap: theme.spacing(1),
        verticalAlign: 'baseline',
    },
    icon: {
        width: 20,
    },
}));

export default function PublishButton({ value, onChange }) {
    const { classes } = useStyles();
    return (
        <Select className={classes.select} size="small" value={value} onChange={onChange}>
            <MenuItem className={classes.item} value selected>
                <VisibilityIcon className={classes.icon} />
                {' '}
                Published
            </MenuItem>
            <MenuItem className={classes.item} value={false}>
                <VisibilityOffIcon className={classes.icon} />
                {' '}
                Unpublished
            </MenuItem>
        </Select>
    );
}
