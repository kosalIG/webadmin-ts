import React from 'react';
import { PropRoute, NavProps } from './interface';
export interface AppContext {
    imageOption: any;
    user: User | null;
    isAuth: boolean;
    permissionRoute: PropRoute[];
    permissionNav: NavProps[];
    login: (data: any) => void;
    logout: () => void;
}

export interface User {
    id: string;
    uid: string;
    token: string;
    kongToken: string;
    type: Type;
    avatar: string;
    fullName: string;
    firstName: string;
    lastName: string;
    mobileNumbe: string;
    email: string;
    permissions: string[];
}

type Type = 'ADMIN' | any;

// Provider
const AppCont = React.createContext({} as AppContext);

// Consummer
const useAppConsummer = (): AppContext => React.useContext(AppCont);
export { AppCont, useAppConsummer };
