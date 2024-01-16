import {
    object, number, string, array,
} from 'yup';

export const productValidationSchema = object().shape({
    name: string().required('Required'),
    alias: string().required('Required').matches(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'Invalid alias'),
    price: number()
        .typeError('Price must be a number')
        .positive('Price can\'t be negative')
        .required(),
    options: array().nullable().of(object().shape({
        name: string().required('Required'),
        options: array().of(string()).min(1, 'At least 1 option is required'),
    })),
    characteristics: array().nullable().of(object().shape({
        name: string().required('Required'),
        value: string().required('Required'),
    })),
});
