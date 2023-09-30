import { ApolloLink } from '@apollo/client';
import { ACCESS_TOKEN } from '../../constants/tokenKeys';

const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => {
        const accessToken = localStorage.getItem(ACCESS_TOKEN);

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
