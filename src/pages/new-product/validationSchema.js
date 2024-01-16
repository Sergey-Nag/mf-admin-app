import {
    array, number, object, string,
} from 'yup';

export const newProductValidationSchema = object().shape({
    name: string().required('Required'),
    alias: string().matches(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'Invalid alias'),
    price: number()
        .typeError('Price must be a number')
        .positive('Price can\'t be negative')
        .required('Required'),
    options: array().nullable().of(object().shape({
        name: string().required('Required'),
        options: array().of(string()).min(1, 'At least 1 option is required'),
    })),
    characteristics: array().nullable().of(object().shape({
        name: string().required('Required'),
        value: string().required('Required'),
    })),
});
