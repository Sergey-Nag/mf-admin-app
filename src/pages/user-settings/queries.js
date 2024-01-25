import { gql } from '@apollo/client';

export const EDIT_ADMIN = gql`
    mutation EditAdmin($id: ID!, $input: EditAdminInput!){
        editAdmin(id: $id input: $input) {
            firstname
            lastname
        }
    }
`;
