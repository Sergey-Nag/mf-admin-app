import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { DELETE_PRODUCT, EDIT_PRODUCT, GET_PRODUCT } from '../queries';

export function useProductData(id) {
    const navigate = useNavigate();
    const {
        loading, error: fetchError, data,
    } = useQuery(GET_PRODUCT, {
        variables: {
            id,
        },
        skip: !id,
    });

    const [
        updateProductMutation,
        { loading: updating, error: updateError },
    ] = useMutation(EDIT_PRODUCT, {
        refetchQueries: [GET_PRODUCT],
    });

    const updateProduct = (product) => updateProductMutation({
        variables: {
            id,
            product,
        },
    });

    const [deleteProduct] = useMutation(DELETE_PRODUCT, {
        variables: {
            id,
        },
        onCompleted: () => {
            navigate('/products', { replace: true });
        },
    });

    return {
        product: data?.product,
        loading,
        updating,
        fetchError,
        updateError,
        updateProduct,
        deleteProduct,
    };
}
