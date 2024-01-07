import { useQuery } from '@apollo/client';
import { PRODUCT } from '../queries';

export function useProductData(id) {
    const { loading, error, data } = useQuery(PRODUCT, {
        variables: {
            id,
        },
        skip: !id,
    });

    return {
        product: data?.product,
        loading,
        error,
    };
}
