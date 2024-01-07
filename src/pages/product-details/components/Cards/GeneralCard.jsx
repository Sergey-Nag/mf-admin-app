import React from 'react';
import { Autocomplete, Grid, TextField } from '@mui/material';
import PageCard from '../../../../components/PageCard/PageCard';
import FormLabel from '../../../../components/FormInputs/FormLabel';

export default function GeneralCard({
    id, name, alias, categories, tags, description = '', skeleton = true,
}) {
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
                        <TextField id="name" value={name} size="small" fullWidth />
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={3} alignSelf="center">
                        <FormLabel label="Alias:" htmlFor="alias" />
                    </Grid>
                    <Grid item xs={9}>
                        <TextField id="alias" value={alias} size="small" fullWidth />
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={3} alignSelf="center">
                        <FormLabel label="Categories:" htmlFor="categories" />
                    </Grid>
                    <Grid item xs={9}>
                        <Autocomplete
                            multiple
                            id="categories"
                            options={categories ?? []}
                            getOptionLabel={(option) => option.name}
                            defaultValue={categories}
                            filterSelectedOptions
                            size="small"
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder="Clother, Shoes, ..."
                                />
                            )}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={3} alignSelf="center">
                        <FormLabel label="Tags:" htmlFor="tags" />
                    </Grid>
                    <Grid item xs={9}>
                        <Autocomplete
                            multiple
                            id="tags"
                            options={tags ?? []}
                            // getOptionLabel={(option) => option}
                            defaultValue={tags}
                            filterSelectedOptions
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
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={12} alignSelf="center">
                        <FormLabel label="Description:" align="left" htmlFor="tags" />
                        <TextField
                            id="description"
                            value={description ?? ''}
                            size="small"
                            fullWidth
                            multiline
                            rows={4}
                        />
                    </Grid>
                </Grid>
            </form>
        </PageCard>
    );
}
