import { RetryLink } from '@apollo/client/link/retry';

export default new RetryLink({
    attempts: {
        max: 3,
        retryIf: (error) => !!error && error.statusCode === 401,
    },
});
