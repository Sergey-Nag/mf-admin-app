import { ApolloLink } from '@apollo/client';

const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => {
        const accessToken = localStorage.getItem('accessToken');

        headers.authorization = accessToken
            ? `Bearer ${accessToken}`
            : null;

        return {
            headers,
        };
    });

    return forward(operation);
});

export default authLink;
