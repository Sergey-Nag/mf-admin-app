import React from 'react';
import {
    Autocomplete, Button, Grid, TextField,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import PageCard from '../../../../components/PageCard/PageCard';
import FormLabel from '../../../../components/FormInputs/FormLabel';

export default function OptionsCard({ skeleton, options }) {
    return (
        <PageCard title="Options" skeleton={skeleton} height={100}>
            {options && options.map((option) => (
                <Grid key={option.name} container spacing={2} marginBottom={1}>
                    <Grid item xs={3} alignSelf="center">
                        <FormLabel label={option.name} htmlFor={`option-${option.name}`} />
                    </Grid>
                    <Grid item xs={9}>
                        <Autocomplete
                            multiple
                            id={`option-${option.name}`}
                            options={[]}
                            // getOptionLabel={(opt) => opt}
                            value={option.options}
                            filterSelectedOptions
                            freeSolo
                            size="small"
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder="Phone, Laptop, etc."
                                />
                            )}
                        />
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
