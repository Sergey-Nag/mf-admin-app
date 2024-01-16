import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NEW_PRODUCT } from '../queries';

export function useCreateProduct() {
    const navigate = useNavigate();
    const [
        addProduct,
        { data, loading, error },
    ] = useMutation(NEW_PRODUCT);

    const createProduct = ({
        price, alias, categories, ...product
    }) => {
        addProduct({
            variables: {
                product: {
                    price: +price,
                    alias: alias || undefined,
                    categoriesId: categories.map((x) => x.id),
                    ...product,
                },
            },
        });
    };

    useEffect(() => {
        if (data && !error) {
            navigate(`/products/${data.addProduct.id}`, { replace: true });
        }
    }, [data, error]);

    return {
        createProduct,
        loading,
        error,
    };
}
