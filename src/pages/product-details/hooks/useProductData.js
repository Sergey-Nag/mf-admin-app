import { useMutation, useQuery } from '@apollo/client';
import { GET_PRODUCT, EDIT_PRODUCT } from '../queries';

export function useProductData(id) {
    const {
        loading, error: fetchError, data, refetch,
    } = useQuery(GET_PRODUCT, {
        variables: {
            id,
        },
        skip: !id,
    });

    const [
        updateProductMutation,
        { loading: updating, error: updateError },
    ] = useMutation(EDIT_PRODUCT);

    const updateProduct = (product) => updateProductMutation({
        variables: {
            id,
            product,
        },
        onCompleted: () => refetch(),
    });

    return {
        product: data?.product,
        loading,
        updating,
        fetchError,
        updateError,
        updateProduct,
    };
}
