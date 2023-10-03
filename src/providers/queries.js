import { gql } from '@apollo/client';

export const ME_QUERY = gql`
    query {
        me {
            id
            firstname
            lastname
            email
            isOnline
            createdISO
            lastModifiedISO
            createdBy {
                id
            }
            modifiedBy {
                id
            }
            permissions {
                canSee {
                    analytics
                    products
                    orders
                    pages
                    admins
                    customers
                }
                canEdit {
                    analytics
                    products
                    orders
                    pages
                    admins
                    customers
                }
                canDelete {
                    analytics
                    products
                    orders
                    pages
                    admins
                    customers
                }
            }
        }
    }
`;
