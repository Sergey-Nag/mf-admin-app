import { useMutation } from '@apollo/client';
import {
    Box, Button, Grid, TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import FormLabel from '../../../components/FormInputs/FormLabel';
import PageCard from '../../../components/PageCard/PageCard';
import { useAuth } from '../../../providers/AuthProvider';
import { ME_QUERY } from '../../../providers/queries';
import { EDIT_ADMIN } from '../queries';
import { userValidationSchema } from '../userValidationSchema';

export function GeneralSettings() {
    const { user } = useAuth();

    const [updateUser] = useMutation(EDIT_ADMIN, {
        refetchQueries: [{ query: ME_QUERY }],
        variables: {
            id: user?.id,
        },
        onError: (error) => {
            alert(error.message);
        },
    });

    const formik = useFormik({
        initialValues: {
            firstname: user?.firstname || '',
            lastname: user?.lastname || '',
        },
        enableReinitialize: true,
        validationSchema: userValidationSchema,
        onSubmit: (values) => {
            updateUser({
                variables: {
                    input: {
                        firstname: values.firstname,
                        lastname: values.lastname,
                    },
                },
            });
        },
    });

    return (
        <PageCard title="General">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={3} alignSelf="center">
                        <FormLabel label="First name:" htmlFor="firstname" />
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            id="firstname"
                            value={formik.values.firstname}
                            size="small"
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstname && !!formik.errors.firstname}
                            helperText={formik.touched.firstname && formik.errors.firstname}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={3} alignSelf="center">
                        <FormLabel label="Last name:" htmlFor="lastname" />
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            id="lastname"
                            value={formik.values.lastname}
                            size="small"
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                </Grid>
                <Box paddingTop={2} textAlign="right">
                    <Button
                        size="medium"
                        color="primary"
                        variant="contained"
                        aria-label="outlined primary button"
                        type="submit"
                        disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
                    >
                        Save Changes
                    </Button>
                </Box>
            </form>
        </PageCard>
    );
}
