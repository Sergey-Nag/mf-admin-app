import React, {
    createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import { useLazyQuery } from '@apollo/client';
import { RESTLogin, RESTLogout } from '../api/rest/restApis';
import { ME_QUERY } from './queries';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants/tokenKeys';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem(ACCESS_TOKEN));
    const [
        getUser,
        {
            data: {
                me: user,
            } = {},
            client,
        },
    ] = useLazyQuery(ME_QUERY);

    const login = async (credentials) => {
        try {
            const { refreshToken, accessToken, error } = await RESTLogin(credentials);

            if (refreshToken && accessToken) {
                localStorage.setItem(ACCESS_TOKEN, accessToken);
                localStorage.setItem(REFRESH_TOKEN, refreshToken);
                setToken(accessToken);
            } else if (error) {
                alert(error);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const logout = async () => {
        try {
            const response = await RESTLogout(token);

            if (response.ok) {
                localStorage.removeItem(ACCESS_TOKEN);
                localStorage.removeItem(REFRESH_TOKEN);

                client.cache.evict({ fieldName: 'me' });
                client.cache.gc();

                setToken(null);
            } else {
                console.log(response);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const contextValue = useMemo(() => ({
        user,
        isAuthorized: !!token,
        login,
        logout,
    }), [user, token, login, logout]);

    useEffect(() => {
        if (token) {
            getUser();
        }
    }, [token]);

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
