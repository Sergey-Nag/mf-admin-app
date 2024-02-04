import { gql } from '@apollo/client';

export const DASHBOARD_NUMBERS = gql`
  query DashboardNumbers {
        products {
            totalItems
        }
        orders {
            totalItems
        }
        customers {
            totalItems
        }
        pages {
            totalItems
        }
    }
`;
