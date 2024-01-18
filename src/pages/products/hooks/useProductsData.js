import { useMutation, useQuery } from '@apollo/client';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SORTING_ORDER } from '../../../constants/api';
import { DELETE_PRODUCTS, PRODUCTS } from '../queries';

export function useProductsData({ filter } = {}) {
    const [searchParams, setSearchParams] = useSearchParams({ page: 0, amount: 5 });
    const [selected, setSelected] = useState([]);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const pagination = useMemo(() => ({
        start: +searchParams.get('page') * +searchParams.get('amount') || 0,
        amount: +searchParams.get('amount') || 5,
    }), [searchParams]);

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

    const [deleteProducts] = useMutation(DELETE_PRODUCTS, {
        variables: {
            ids: selected.map(({ id }) => id),
        },
        refetchQueries: [PRODUCTS],
        onCompleted: () => {
            setShowDeleteDialog(false);
        },
    });

    const handlePaginationChange = (nextPage) => {
        setSearchParams({ page: nextPage, amount: pagination.amount });
    };

    const handleItemsPerPageChange = (amount) => {
        setSearchParams({ page: 0, amount });
    };

    return {
        products: data?.products?.items,
        totalItems: data?.products?.totalItems,
        loading,
        pagination,
        page: +searchParams.get('page') || 0,
        handlePaginationChange,
        handleItemsPerPageChange,
        deleteProducts,
        setSelected,
        selectedAmount: selected.length,
        showDeleteDialog,
        setShowDeleteDialog,
    };
}
