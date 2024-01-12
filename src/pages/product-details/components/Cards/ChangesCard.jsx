import {
    Avatar, Box, Grid, Typography,
} from '@mui/material';
import React from 'react';
import FormLabel from '../../../../components/FormInputs/FormLabel';
import PageCard from '../../../../components/PageCard/PageCard';
import { dateFormat } from '../../../../utils/dateFormat';

export default function ChangesCard({
    skeleton, createdBy, createdAt, updatedBy, updatedAt,
}) {
    return (
        <PageCard title="Changes" skeleton={skeleton} height={100}>
            {createdBy && (
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={3} alignSelf="center">
                        <FormLabel label="Created:" align="left" />
                    </Grid>
                    <Grid item xs={6} alignSelf="center" textAlign="center">
                        {createdAt && dateFormat(createdAt, 'DD.MM.YY HH:mm')}
                    </Grid>
                    <Grid item xs={3} alignSelf="center" display="flex" alignItems="center" justifyContent="end">
                        <Box marginRight={1}>
                            <Typography variant="body2">
                                {createdBy?.firstname}
                            </Typography>
                            <Typography variant="body2">
                                {createdBy?.lastname}
                            </Typography>
                        </Box>
                        <Avatar>
                            <Typography variant="body2">
                                {createdBy.firstname[0]}
                            </Typography>
                        </Avatar>
                    </Grid>
                </Grid>
            )}
            {updatedBy && (
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={3} alignSelf="center">
                        <FormLabel label="Updated:" align="left" />
                    </Grid>
                    <Grid item xs={6} alignSelf="center" textAlign="center">
                        {updatedAt && dateFormat(updatedAt, 'DD.MM.YY HH:mm')}
                    </Grid>
                    <Grid item xs={3} alignSelf="center" display="flex" alignItems="center" justifyContent="end">
                        <Box marginRight={1}>
                            <Typography variant="body2">
                                {updatedBy?.firstname}
                            </Typography>
                            <Typography variant="body2">
                                {updatedBy?.lastname}
                            </Typography>
                        </Box>
                        <Avatar>
                            <Typography variant="body2">
                                {updatedBy.firstname[0]}
                            </Typography>
                        </Avatar>
                    </Grid>
                </Grid>
            )}
            {!createdBy && !updatedBy && (
                <FormLabel label="No changes" align="left" />
            )}
        </PageCard>
    );
}
