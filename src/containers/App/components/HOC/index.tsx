import React, { useState } from 'react';
import { AppCont } from 'util/appContext';
import { UserLogin } from 'util/interface';

interface Hoc {
    user?: UserLogin | null;
    isAuth: boolean;
}
function wrapComponent(Components: React.FC<Hoc>): React.FC {
    const childComponent = () => {
        const [user, setUser] = useState<UserLogin | null>(null);
        const [isAuth, setIsAuth] = useState<boolean>(true);
        // Login
        function login(): void {
            setUser({ id: '001', fullName: 'kosal', gender: 'M' });
            setIsAuth(true);
        }

        // Login out
        function logout(): void {
            setUser(null);
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
