import { object, string, ref } from 'yup';

export const userValidationSchema = object().shape({
    firstname: string().required('First name is required').min(3, 'Required minimum 3 characters'),
});

export const passwordValidationSchema = object().shape({
    newPassword: string()
        .required('Password is required'),
    repeatPassword: string()
        .required('Confirm password is required')
        .oneOf(
            [ref('newPassword')],
            'Passwords must match',
        ),
});
