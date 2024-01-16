import { gql } from '@apollo/client';

export const NEW_PRODUCT = gql`
    mutation AddProduct($product: NewProductInput!) {
        addProduct(input: $product) {
            id
        }
    }
`;
