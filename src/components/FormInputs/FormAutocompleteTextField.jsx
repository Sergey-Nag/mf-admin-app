import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

export default function FormAutocompleteTextField({ inputParams, ...rest }) {
    return (
        <Autocomplete
            multiple
            options={[]}
            autoComplete
            freeSolo
            size="small"
            {...rest}
            renderInput={(params) => (
                <TextField
                    {...params}
                    {...inputParams}
                />
            )}
        />
    );
}
