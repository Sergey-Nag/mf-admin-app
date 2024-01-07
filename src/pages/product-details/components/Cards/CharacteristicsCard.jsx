import { Add } from '@mui/icons-material';
import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import FormLabel from '../../../../components/FormInputs/FormLabel';
import PageCard from '../../../../components/PageCard/PageCard';

export default function CharacteristicsCard({ skeleton, characteristics }) {
    return (
        <PageCard title="Characteristics" skeleton={skeleton} height={100}>
            {characteristics && characteristics.map((charact) => (
                <Grid key={charact.name} container spacing={2} marginBottom={1}>
                    <Grid item xs={3} alignSelf="center">
                        <FormLabel label={charact.name} htmlFor={`option-${charact.name}`} />
                    </Grid>
                    <Grid item xs={9}>
                        <TextField value={charact.value} size="small" fullWidth />
                    </Grid>
                </Grid>
            ))}
            <Button
                variant="outlined"
                color="primary"
                size="medium"
                startIcon={<Add />}
                sx={{ marginTop: 1 }}
                fullWidth
            >
                Add
            </Button>
        </PageCard>
    );
}
