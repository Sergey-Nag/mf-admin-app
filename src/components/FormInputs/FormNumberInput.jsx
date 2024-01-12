import React from 'react';
import { tss } from 'tss-react/mui';

const useStyles = tss.create(({ theme }) => {
    return {
        input: {
            border: `1px solid ${theme.palette.divider}`,
            padding: theme.spacing(1),
            paddingRight: 0,
            borderRadius: theme.shape.borderRadius,
            color: 'currentColor',
            width: '100%',
            ...theme.typography.body1,
        },
    };
});

export default function FormNumberInput({
    value, onChange, className, sx, ...props
}) {
    const { classes, cx } = useStyles();
    return (
        <input
            type="number"
            value={value}
            onChange={onChange}
            style={sx}
            className={cx(classes.input, className)}
            {...props}
        />
    );
}
