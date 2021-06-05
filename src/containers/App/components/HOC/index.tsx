import React from 'react';
import { AppCont, User } from 'util/appContext';
import { useHoc } from './useHoc';
interface Hoc {
    user: User | null;
    isAuth: boolean;
}
function wrapComponent(Components: React.FC<Hoc>): React.FC {
    const childComponent = () => {
        const { imageOption, user, isAuth, permissionRoute, permissionNav, login, logout } = useHoc();

        // PROVIDER PROPS
        const props = {
            imageOption,
            user,
            isAuth,
            permissionRoute,
            permissionNav,
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
