import axios from 'axios';
import { AppContext, User } from 'util/appContext';
import { useMemo, useState } from 'react';
import { authKey, serviceAuthenticate } from 'env';
import { PropRoute, NavProps } from 'util/interface';
import _route from '_route';
import _nav from '_nav';

export function useHoc(): AppContext {
    const [user, setUser] = useState<User | null>(null);
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [permissionRoute, setPermissionRoute] = useState<PropRoute[]>([]);
    const [permissionNav, setPermissionNav] = useState<NavProps[]>([]);

    useMemo(() => {
        const jUser = localStorage.getItem('user');
        if (jUser) {
            const localUser: User = JSON.parse(jUser);

            setUser(localUser);
            setIsAuth(true);

            findRoute(localUser?.permissions);
            findNav(localUser?.permissions);
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

        findRoute(data?.permissions);
    }

    // Login out
    function logout(): void {
        setUser(null);
        localStorage.clear();
        setIsAuth(false);
    }

    // Find Route
    function findRoute(permission: string[]): void {
        const route = _route?.filter((r) => permission?.find((p) => r.id === p));
        setPermissionRoute(route);
    }

    // Find Nav
    function findNav(permission: string[]): void {
        const navPermisson = _nav?.filter((n) => permission?.find((p) => n.id === p));
        _nav?.forEach(
            (n) =>
                n?.allow &&
                navPermisson.push({
                    ...n,
                    children: n?.children?.filter((nChild) => permission?.find((p) => nChild.id === p)),
                }),
        );
        const nav = navPermisson?.sort((a, b) => a.order - b.order);
        setPermissionNav(nav);
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
    return { imageOption, user, isAuth, permissionRoute, permissionNav, login, logout };
}
