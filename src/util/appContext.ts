import React from 'react';
import { AppContext } from './interface';
// Provider
const AppCont = React.createContext({} as AppContext);

// Consummer
const appCons = (): AppContext => React.useContext(AppCont);
export { AppCont, appCons };
