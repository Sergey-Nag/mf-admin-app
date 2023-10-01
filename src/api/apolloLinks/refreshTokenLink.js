import { onError } from '@apollo/client/link/error';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants/tokenKeys';
import { RESTRefreshToken } from '../rest/restApis';

const refreshTokenLink = onError(({
    networkError, operation, forward,
}) => {
    if (!operation.getContext().headers.authorization) return;

    if (networkError && networkError.statusCode === 401) {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        const accessToken = localStorage.getItem(ACCESS_TOKEN);

        if (refreshToken && accessToken) {
            RESTRefreshToken(accessToken, refreshToken)
                .then(async (response) => {
                    if (response.status === 401) {
                        localStorage.removeItem(ACCESS_TOKEN);
                        localStorage.removeItem(REFRESH_TOKEN);
                        return;
                    }

                    if (!response.ok) {
                        throw new Error('Refresh token request failed');
                    }

                    const { accessToken: newAccessToken } = await response.json();

                    if (newAccessToken) {
                        localStorage.setItem(ACCESS_TOKEN, newAccessToken);
                    }

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
