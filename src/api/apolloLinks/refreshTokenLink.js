import { onError } from '@apollo/client/link/error';
import { REST_URL } from '../../constants/urls';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants/tokenKeys';

const refreshTokenLink = onError(({
    networkError, operation, forward,
}) => {
    if (!operation.getContext().headers.authorization) return;

    if (networkError && networkError.statusCode === 401) {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        const accessToken = localStorage.getItem(ACCESS_TOKEN);

        if (refreshToken) {
            fetch(`${REST_URL}/refresh-token`, {
                method: 'POST',
                headers: {
                    authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            })
                .then(async (response) => {
                    if (!response.ok) {
                        // Handle the refresh token request error, e.g., refresh token expired
                        throw new Error('Refresh token request failed');
                    }

                    const { accessToken: newAccessToken, error } = await response.json();

                    // Update the access token in local storage
                    if (newAccessToken) {
                        localStorage.setItem(ACCESS_TOKEN, newAccessToken);
                    } else if (error) {
                        localStorage.removeItem(ACCESS_TOKEN);
                        localStorage.removeItem(REFRESH_TOKEN);
                    }

                    // Retry the original GraphQL operation after token refresh
                    return forward(operation);
                })
                .catch((refreshError) => {
                    console.error('Refresh token error:', refreshError);
                    // Handle the refresh token request error, e.g., log out the user
                });
        } else {
            // No refresh token available, handle the error accordingly, e.g., log out the user
        }
    }
});

export default refreshTokenLink;
