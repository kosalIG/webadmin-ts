/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { AppCont } from 'util/appContext';
import { UserLogin } from 'util/interface';

interface Hoc {
    user?: UserLogin | null;
    isAuth: boolean;
}
function wrapComponent(Components: React.FC<Hoc>): React.FC {
    const childComponent = () => {
        const [user, setUser] = useState<any>(null);
        const [isAuth, setIsAuth] = useState<boolean>(true);

        useEffect(() => {
            const jUser = localStorage.getItem('user');
            if (jUser) {
                setUser(JSON.parse(jUser));
                setIsAuth(true);
            }
        }, []);

        // is login success
        useMemo(() => {
            if (user?.kongToken) {
                // AXIOS HEADER
                axios.defaults.headers.common['Kong-Authorization'] = `Bearer ${user?.kongToken}`;
                axios.defaults.headers.common['X-Auth-Key'] = user?.token;
            } else {
                delete axios.defaults.headers.common['Kong-Authorization'];
                delete axios.defaults.headers.common['X-Auth-Key'];
            }
        }, [user?.kongToken]);

        // Login
        function login(data: any): void {
            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
            setIsAuth(true);
        }

        // Login out
        function logout(): void {
            setUser(null);
            localStorage.clear();
            setIsAuth(false);
        }

        // PROVIDER PROPS
        const props = {
            user,
            isAuth,
            login,
            logout,
        };
        return (
            <AppCont.Provider value={{ ...props }}>
                <Components {...props} />
            </AppCont.Provider>
        );
    };
    return childComponent;
}

export default wrapComponent;
