import { REST_URL } from '../../constants/urls';

/**
 *
 * @param {{ email: string, password: string }} credentials
 * @returns {Promise<{ accessToken: string, refreshToken: string} | { error: string }>}
 */
export async function RESTLogin(credentials) {
    return fetch(`${REST_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    }).then((res) => res.json());
}
/**
 *
 * @param {string} accessToken
 * @returns {Promise<Response>}
 */
export async function RESTLogout(accessToken) {
    return fetch(`${REST_URL}/logout`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
}

/**
 *
 * @param {string} accessToken
 * @param {string} refreshToken
 * @returns {Promise<Response>}
 */
export async function RESTRefreshToken(accessToken, refreshToken) {
    return fetch(`${REST_URL}/refresh-token`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
    });
}
