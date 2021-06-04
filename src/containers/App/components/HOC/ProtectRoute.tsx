import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export interface IPrivateRouteProps extends RouteProps {
    isAuth: boolean; // is authenticate route
}

const ProtectRoute: React.FC<IPrivateRouteProps> = ({ isAuth, ...props }) => {
    return isAuth ? <Route {...props} /> : <Redirect to="/login" />;
};

export default ProtectRoute;
