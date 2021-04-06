import React, { useState, useEffect } from 'react';
import { AppCont } from 'util/appContext';
import { UserLogin } from 'util/interface';

interface Hoc {
    user?: UserLogin | null;
    isAuth: boolean;
}
function wrapComponent(Components: React.FC<Hoc>): React.FC {
    const childComponent = () => {
        const [user, setUser] = useState(null);
        const [isAuth, setIsAuth] = useState<boolean>(true);

        useEffect(() => {
            const jUser = localStorage.getItem('user');
            if (jUser) {
                setUser(JSON.parse(jUser));
                setIsAuth(true);
            }
        }, []);

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
