import { object, string } from 'yup';

export const userValidationSchema = object().shape({
    firstName: string().required('First name is required').min(3, 'required minimum 3 character'),
});
