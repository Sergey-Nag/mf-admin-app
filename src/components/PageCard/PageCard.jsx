import React from 'react';
import {
    Card, CardContent, Skeleton, Typography,
} from '@mui/material';
import { tss } from 'tss-react/mui';

const useStyles = tss.create(({ theme, height }) => ({
    card: {
        width: '100%',
    },
    padding: {
        minHeight: height,
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        '&:last-child': {
            paddingBottom: theme.spacing(2),
        },
        '& > span': {
            visibility: 'visible',
        },
    },
    title: {
        fontSize: 11,
        color: theme.palette.text.secondary,
        visibility: 'visible',
        userSelect: 'none',
    },
}));

export default function PageCard({
    title, skeleton, height = 200, children,
}) {
    const { classes, cx } = useStyles({ height });
    const titleRow = (
        <Typography variant="overline" className={classes.title} gutterBottom>
            {title}
        </Typography>
    );

    if (skeleton) {
        return (
            <Skeleton
                variant="rounded"
                width="100%"
                className={cx(classes.card, classes.padding)}
            >
                {titleRow}
            </Skeleton>
        );
    }

    return (
        <Card variant="outlined" className={classes.card}>
            <CardContent className={classes.padding}>
                <div>
                    {titleRow}
                </div>
                <div>{children}</div>
            </CardContent>
        </Card>
    );
}
