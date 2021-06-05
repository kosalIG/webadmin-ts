import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { AppCont, User } from 'util/appContext';
import { serviceAuthenticate, authKey } from 'env';

interface Hoc {
    user: User | null;
    isAuth: boolean;
}
function wrapComponent(Components: React.FC<Hoc>): React.FC {
    const childComponent = () => {
        const [user, setUser] = useState<User | null>(null);
        const [isAuth, setIsAuth] = useState<boolean>(false);

        useMemo(() => {
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
        function login(data: User): void {
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

        const imageOption = {
            action: `${serviceAuthenticate}/upload/image?type=QWIQ_image`,
            name: '',
            method: 'POST',
            headers: {
                'X-APP-BUNDLE-ID': 'com.netobjex.qwiq.driver / com.netobjex.qwiq.user',
                'X-API-AUTH-KEY': authKey,
                'Kong-Authorization': user?.kongToken ? `Bearer ${user?.kongToken}` : '',
                'X-Auth-Key': user?.token,
            },
        };

        // PROVIDER PROPS
        const props = {
            imageOption,
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
