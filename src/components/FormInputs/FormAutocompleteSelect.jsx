import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React from 'react';

export default function FormAutocompleteSelect({ inputParams, loading, ...rest }) {
    return (
        <Autocomplete
            multiple
            filterSelectedOptions
            size="small"
            {...rest}
            renderInput={(params) => (
                <TextField
                    {...params}
                    {...inputParams}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
}
