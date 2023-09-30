import {
    ApolloClient, HttpLink, InMemoryCache, from,
} from '@apollo/client';
import { GRAPHQL_URL } from '../constants/urls';
import authLink from './apolloLinks/authLink';
import retryLink from './apolloLinks/retryLink';
import refreshTokenLink from './apolloLinks/refreshTokenLink';

const httpLink = new HttpLink({ uri: GRAPHQL_URL });

const client = new ApolloClient({
    link: from([retryLink, refreshTokenLink, authLink, httpLink]),
    cache: new InMemoryCache({
        addTypename: false,
    }),
    connectToDevTools: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'network-only',
            nextFetchPolicy: 'cache-first',
            errorPolicy: 'all',
        },
    },
});

export default client;
