import React from 'react';
import { useFormik } from 'formik';
import { useMutation, useQuery } from '@apollo/client';
import {
    object, string,
} from 'yup';
import { Button, Grid } from '@mui/material';
import { ME_QUERY, EDIT_ADMIN } from './queries';
import Page from '../../components/Page/Page';
import theme from '../../theme';
import { userValidationSchema } from './userValidationSchema';

function EditProfileForm() {
    const { data: meData } = useQuery(ME_QUERY);

    const formik = useFormik({
        initialValues: {
            firstName: meData?.me?.firstName || '',
            lastName: meData?.me?.lastName || '',
        },
        validationSchema: userValidationSchema,
        onSubmit: async (values) => {
            try {
                await EDIT_ADMIN({
                    variables: {
                        input: {
                            firstName: values.firstName,
                            lastName: values.lastName,
                        },
                    },
                    refetchQueries: [{ query: ME_QUERY }],
                });

                console.log('Successfully edited admin');
            } catch (error) {
                console.error('Error editing admin', error);
            }
        },
    });

    return (
        <Page title="Settings">
            <Grid item xs={12}>
                <form
                    onSubmit={formik.handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: '10px',
                        padding: '20px',
                        border: '1px solid #ccc',
                    }}
                >
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            style={{
                                borderRadius: '5px',
                                width: '300px',
                                height: '36.5px',
                                marginBottom: theme.spacing(2),
                                border: '1px solid #ccc',
                            }}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div>{formik.errors.firstName}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            style={{
                                borderRadius: '5px',
                                width: '300px',
                                height: '36.5px',
                                marginBottom: theme.spacing(2),
                                border: '1px solid #ccc',
                            }}
                        />
                    </div>
                    <Button size="medium" color="primary" variant="contained" aria-label="outlined primary button" type="submit" disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}>
                        Save Changes
                    </Button>
                </form>
            </Grid>
        </Page>

    );
}

export default EditProfileForm;
