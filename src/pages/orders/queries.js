import { gql } from '@apollo/client';

export const ORDERS = gql`
    query Orders($filter: OrdersFilter, $sort: [Sort], $pagination: Pagination) {
        orders(
            filter: $filter
            sort: $sort
            pagination: $pagination
        ) {
            items {
                id
                orderProducts{
                    product{
                        name}
                    }
                shippingAddress
                customer{
                    phone
                }
                totalPrice
                createdISO
                currentStatus
            },
            end
            itemsLeft
            totalItems
        }
    }
`;
