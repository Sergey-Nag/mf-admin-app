import { useQuery } from '@apollo/client';
import { PRODUCTS } from '../queries';
import { SORTING_ORDER } from '../../../constants/api';

export function useProductsData({ filter } = {}) {
    const {
        data,
        loading,
    } = useQuery(
        PRODUCTS,
        {
            variables: {
                filter,
                sort: [{ field: 'lastModifiedISO', order: SORTING_ORDER.DESC }],
                pagination: { start: 0, amount: 10 },
            },
        },
    );

    return {
        products: data?.products?.items,
        loading,
    };
}
