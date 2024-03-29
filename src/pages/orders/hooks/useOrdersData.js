import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SORTING_ORDER } from '../../../constants/api';
import { ORDERS } from '../queries';

export function useOrdersData({ filter } = {}) {
    const [searchParams, setSearchParams] = useSearchParams({ page: 0, amount: 5 });

    const pagination = useMemo(() => ({
        start: +searchParams.get('page') * +searchParams.get('amount') || 0,
        amount: +searchParams.get('amount') || 5,
    }), [searchParams]);

    const {
        data,
        loading,
    } = useQuery(
        ORDERS,
        {
            variables: {
                filter,
                sort: [{ field: 'createdISO', order: SORTING_ORDER.DESC }],
                pagination,
            },
        },
    );

    const handlePaginationChange = (nextPage) => {
        setSearchParams({ page: nextPage, amount: pagination.amount });
    };

    const handleItemsPerPageChange = (amount) => {
        setSearchParams({ page: 0, amount });
    };

    return {
        orders: data?.orders?.items,
        totalItems: data?.orders?.totalItems,
        loading,
        pagination,
        page: +searchParams.get('page') || 0,
        handlePaginationChange,
        handleItemsPerPageChange,
    };
}
