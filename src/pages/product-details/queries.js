import { gql } from '@apollo/client';

export const PRODUCT = gql`
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
                alias
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
            coverPhotoUrl
            photosUrl
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
