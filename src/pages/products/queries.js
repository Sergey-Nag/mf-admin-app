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
                coverPhotoUrl
                name
                categories {
                    id
                    name
                    alias
                }
                price
                stock {
                    amount
                }
                lastModifiedISO
                modifiedBy {
                    id
                    firstname
                    lastname
                }
            }
        }
    }
`;
