import React from 'react';
import {
    Box, Button, Grid, TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import PageCard from '../../../components/PageCard/PageCard';
import FormLabel from '../../../components/FormInputs/FormLabel';
import { passwordValidationSchema } from '../userValidationSchema';
import { RESTChangePassword } from '../../../api/rest/restApis';

export function PasswordSettings() {
    const formik = useFormik({
        initialValues: {
            newPassword: '',
            repeatPassword: '',
        },
        enableReinitialize: true,
        validationSchema: passwordValidationSchema,
        onSubmit: async (values, formikHelpers) => {
            try {
                const result = await RESTChangePassword(values.newPassword);
                if (result.ok) {
                    formikHelpers.resetForm();
                    alert('Password changed successfully!');
                } else {
                    const message = await result.json();
                    formikHelpers.setFieldError('newPassword', message.error);
                }
            } catch (e) {
                alert(e.message);
            }
        },
    });

    return (
        <PageCard title="Password">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={4} alignSelf="center">
                        <FormLabel label="New password:" htmlFor="newPassword" />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            id="newPassword"
                            value={formik.values.newPassword}
                            size="small"
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.newPassword && !!formik.errors.newPassword}
                            helperText={formik.touched.newPassword && formik.errors.newPassword}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginBottom={1}>
                    <Grid item xs={4} alignSelf="center">
                        <FormLabel label="Repeat password:" htmlFor="repeatPassword" />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            id="repeatPassword"
                            value={formik.values.repeatPassword}
                            size="small"
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.repeatPassword && !!formik.errors.repeatPassword}
                            helperText={
                                formik.touched.repeatPassword && formik.errors.repeatPassword
                            }
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
                        Change
                    </Button>
                </Box>
            </form>
        </PageCard>
    );
}
