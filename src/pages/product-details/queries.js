import { gql } from '@apollo/client';

export const GET_PRODUCT = gql`
    query Product($id: ID!) {
        product(find: {
            id: $id
        }) {
            id
            name
            description
            price
            alias
            isPublished
            priceHistory {
                price
                createdISO
            }
            categories {
                id
                name
            }
            stock {
                amount
                lowStockAlert
            }
            characteristics {
                name
                value
            }
            options {
                name
                options
            }
            tags
            coverPhoto {
                id
                alt
                url
                deleteUrl
            }
            photos {
                id
                alt
                url
            }
            createdISO
            lastModifiedISO
            createdBy {
                id
                firstname
                lastname
            }
            modifiedBy {
                id
                firstname
                lastname
            }
            sold
        }
    }
`;

export const EDIT_PRODUCT = gql`
    mutation EditProduct($id: ID!, $product: EditProductInput!) {
        editProduct(id: $id, input: $product) {
            id
        }
    }
`;

export const CATEGORIES = gql`
    query Categories {
        categories {
            items {
                id
                name
            }
        }
    }
`;
