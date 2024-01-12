import React from 'react';
import {
    Button, Grid, IconButton, TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Add } from '@mui/icons-material';
import PageCard from '../../../../components/PageCard/PageCard';
import FormAutocompleteTextField from '../../../../components/FormInputs/FormAutocompleteTextField';

export default function OptionsCard({
    skeleton, options, setFieldValue, onBlur, errors, touched,
}) {
    const createHandleNameChange = (i) => (e) => {
        setFieldValue(`options[${i}].name`, e.target.value);
    };
    const createHandleOptionChange = (i) => (_, value) => {
        setFieldValue(`options[${i}].options`, value);
    };
    const createHandleOptionRemove = (i) => () => {
        setFieldValue('options', options.filter((_, index) => index !== i));
    };
    const addNewOption = () => {
        if (options === null) setFieldValue('options', [{ name: '', options: [] }]);
        else if (options.at(-1)?.name !== '' && options.at(-1)?.options.length !== 0) {
            setFieldValue('options', [...options, { name: '', options: [] }]);
        }
    };

    const allowToAdd = options === null || (options && options.at(-1)?.name !== '' && options.at(-1)?.options.length !== 0);
    return (
        <PageCard title="Options" skeleton={skeleton} height={100}>
            {options && options.map((option, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Grid key={i} container spacing={1} marginBottom={1}>
                    <Grid item xs={3}>
                        <TextField
                            id={`option-name-${i}`}
                            value={option.name}
                            size="small"
                            fullWidth
                            onChange={createHandleNameChange(i)}
                            onBlur={onBlur}
                            placeholder="Size"
                            sx={{
                                '& input, & .MuiFormHelperText-root': { textAlign: 'right' },
                            }}
                            error={`option-name-${i}` in touched && !!errors?.[i]?.name}
                            helperText={`option-name-${i}` in touched && errors?.[i]?.name}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <FormAutocompleteTextField
                            id={`option-options-${i}`}
                            value={option?.options ?? []}
                            onChange={createHandleOptionChange(i)}
                            onBlur={onBlur}
                            inputParams={{
                                error: `option-options-${i}` in touched && !!errors?.[i]?.options,
                                helperText: `option-options-${i}` in touched && errors?.[i]?.options,
                                placeholder: 'S, M, L, etc.',
                            }}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={createHandleOptionRemove(i)}>
                            <DeleteIcon />
                        </IconButton>
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
                onClick={addNewOption}
                disabled={!allowToAdd}
            >
                Add
            </Button>
        </PageCard>
    );
}
