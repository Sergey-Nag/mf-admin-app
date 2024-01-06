import { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { PRODUCTS } from '../queries';
import { SORTING_ORDER } from '../../../constants/api';

export function useProductsData({ filter } = {}) {
    const [page, setPage] = useState(0);
    const [pagination, setPagination] = useState({
        start: 0,
        amount: 5,
    });

    const {
        data,
        loading,
    } = useQuery(
        PRODUCTS,
        {
            variables: {
                filter,
                sort: [{ field: 'createdISO', order: SORTING_ORDER.DESC }],
                pagination,
            },
        },
    );

    const pagesMap = useMemo(() => {
        if (data?.products?.totalItems === undefined) {
            return [];
        }
        const pagesCount = Math.ceil(data.products.totalItems / pagination.amount);
        return new Array(pagesCount).fill(0).map((_, i) => i * pagination.amount);
    }, [data?.products?.totalItems, pagination.amount]);

    const handlePaginationChange = (nextPage) => {
        setPagination(
            {
                start: pagesMap[nextPage],
                amount: pagination.amount,
            },
        );
        setPage(nextPage);
    };

    const handleItemsPerPageChange = (amount) => {
        setPagination(
            {
                start: 0,
                amount,
            },
        );
        setPage(0);
    };

    return {
        products: data?.products?.items,
        totalItems: data?.products?.totalItems,
        loading,
        pagination,
        page,
        handlePaginationChange,
        handleItemsPerPageChange,
    };
}
