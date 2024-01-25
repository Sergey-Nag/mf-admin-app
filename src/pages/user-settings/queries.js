import { gql } from '@apollo/client';

export const ME_QUERY = gql`
    query {
        me {
            firstname
            lastname      
        }
    }
`;
export const EDIT_ADMIN = gql`
    mutation editAdmin($id: ID!, $input: EditAdminInput!){
        admin{
            firstname
            lastname
        }
    }
`;
