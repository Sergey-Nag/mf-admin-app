import { Add } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Button, Grid, IconButton, TextField,
} from '@mui/material';
import React from 'react';
import PageCard from '../PageCard/PageCard';

export default function CharacteristicsCard({
    skeleton, characteristics, setFieldValue, onBlur, errors, touched,
}) {
    const createHandleNameChange = (i) => (e) => {
        setFieldValue(`characteristics[${i}].name`, e.target.value);
    };
    const createHandleValueChange = (i) => (e) => {
        setFieldValue(`characteristics[${i}].value`, e.target.value);
    };
    const createHandleCharRemove = (i) => () => {
        setFieldValue('characteristics', characteristics.filter((_, index) => index !== i));
    };
    const addNewChar = () => {
        if (characteristics === null) setFieldValue('characteristics', [{ name: '', value: '' }]);
        else if (characteristics.at(-1)?.name !== '' && characteristics.at(-1)?.value !== '') {
            setFieldValue('characteristics', [...characteristics, { name: '', value: '' }]);
        }
    };

    const allowToAdd = characteristics === null
        || (characteristics && characteristics.at(-1)?.name !== '' && characteristics.at(-1)?.value !== '');
    return (
        <PageCard title="Characteristics" skeleton={skeleton} height={100}>
            {characteristics && characteristics.map((charact, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Grid key={i} container spacing={1} marginBottom={1}>
                    <Grid item xs={3}>
                        {/* <FormLabel label={charact.name} htmlFor={`option-${charact.name}`} />
                        */}
                        <TextField
                            id={`char-name-${i}`}
                            value={charact.name}
                            size="small"
                            fullWidth
                            onChange={createHandleNameChange(i)}
                            onBlur={onBlur}
                            placeholder="Weight"
                            sx={{
                                '& input, & .MuiFormHelperText-root': { textAlign: 'right' },
                            }}
                            error={`char-name-${i}` in touched && !!errors?.[i]?.name}
                            helperText={`char-name-${i}` in touched && errors?.[i]?.name}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            id={`char-value-${i}`}
                            value={charact.value}
                            size="small"
                            fullWidth
                            onChange={createHandleValueChange(i)}
                            onBlur={onBlur}
                            placeholder="1.5 kg"
                            error={`char-value-${i}` in touched && !!errors?.[i]?.value}
                            helperText={`char-value-${i}` in touched && errors?.[i]?.value}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={createHandleCharRemove(i)}>
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
                onClick={addNewChar}
                disabled={!allowToAdd}
            >
                Add
            </Button>
        </PageCard>
    );
}
