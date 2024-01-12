import { useLazyQuery } from '@apollo/client';
import {
    Grid, TextField,
} from '@mui/material';
import React from 'react';
import FormLabel from '../../../../components/FormInputs/FormLabel';
import PageCard from '../../../../components/PageCard/PageCard';
import { CATEGORIES } from '../../queries';
import FormAutocompleteTextField from '../../../../components/FormInputs/FormAutocompleteTextField';
import FormAutocompleteSelect from '../../../../components/FormInputs/FormAutocompleteSelect';

export default function GeneralCard({
    id, name = '', alias = '', categories = [], tags = [], description, skeleton = true, onChange, setFieldValue,
    handleBlur, errors, touched,
}) {
    const [
        getCategories,
        {
            data: {
                categories: categoriesOptions,
            } = {},
            loading,
        },
    ] = useLazyQuery(CATEGORIES);
    console.log(errors, touched);

    const aliasPlaceholder = name.toLowerCase()
        .split(/\W/)
        .filter(Boolean)
        .join('-');

    return (
        <PageCard title="General" skeleton={skeleton}>
            <form>
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={3} alignSelf="center">
                        <FormLabel label="Id:" htmlFor="id" />
                    </Grid>
                    <Grid item xs={9}>
                        <TextField id="id" value={id} size="small" fullWidth disabled />
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={3} alignSelf="center">
                        <FormLabel label="Full name:" htmlFor="name" />
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            id="name"
                            value={name}
                            size="small"
                            fullWidth
                            onChange={onChange}
                            onBlur={handleBlur}
                            error={touched.name && !!errors.name}
                            helperText={touched.name && errors.name}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={3} alignSelf="center">
                        <FormLabel label="Alias:" htmlFor="alias" />
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            id="alias"
                            value={alias}
                            size="small"
                            fullWidth
                            onChange={onChange}
                            onBlur={handleBlur}
                            placeholder={aliasPlaceholder}
                            error={touched.alias && !!errors.alias}
                            helperText={touched.alias && errors.alias}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={3} alignSelf="center">
                        <FormLabel label="Categories:" htmlFor="categories" />
                    </Grid>
                    <Grid item xs={9}>
                        <FormAutocompleteSelect
                            id="categories"
                            loading={loading}
                            value={categories}
                            options={categoriesOptions?.items ?? []}
                            getOptionLabel={(cat) => cat.name}
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            onOpen={() => getCategories()}
                            onChange={(_, value) => {
                                setFieldValue('categories', value);
                            }}
                            onBlur={handleBlur}
                            inputParams={{
                                placeholder: 'Clother, Shoes, ...',
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={3} alignSelf="center">
                        <FormLabel label="Tags:" htmlFor="tags" />
                    </Grid>
                    <Grid item xs={9}>
                        <FormAutocompleteTextField
                            id="tags"
                            value={tags}
                            onChange={(_, value) => {
                                setFieldValue('tags', value);
                            }}
                            onBlur={handleBlur}
                            inputParams={{
                                placeholder: 'phone, laptop, ...',
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={12} alignSelf="center">
                        <FormLabel label="Description:" align="left" htmlFor="tags" />
                        <TextField
                            id="description"
                            value={description ?? ''}
                            size="small"
                            fullWidth
                            multiline
                            rows={5}
                            onChange={onChange}
                            onBlur={handleBlur}
                        />
                    </Grid>
                </Grid>
            </form>
        </PageCard>
    );
}
