import { gql } from '@apollo/client';

export const PRODUCTS = gql`
    query Products($filter: ProductFilter, $sort: [Sort], $pagination: Pagination) {
        products(
            filter: $filter
            sort: $sort
            pagination: $pagination
        ) {
            items {
                id
                coverPhoto {
                    url
                    thumbUrl
                }
                name
                alias
                categories {
                    id
                    name
                    alias
                }
                price
                stock {
                    amount
                }
                createdISO
                createdBy {
                    id
                    firstname
                    lastname
                }
            },
            end
            itemsLeft
            totalItems
        }
    }
`;

export const DELETE_PRODUCTS = gql`
    mutation DeleteProducts($ids: [ID]!) {
        deleteProducts(ids: $ids) {
            id
        }
    }
`;
