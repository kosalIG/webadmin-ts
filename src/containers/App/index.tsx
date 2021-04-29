import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { ApolloProvider } from '@apollo/client/react';
import Loading from 'components/Loading';
import { servicePayment } from 'env';
import { appCons } from 'util/appContext';

import { wrapComponent } from './components';
import Protect from './components/HOC/ProtectRoute';

const Layout = React.lazy(() => import('containers/Layout'));
const Login = React.lazy(() => import('containers/Login'));

const CustomLoading = styled.div`
    position: absolute !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const App: React.FC = () => {
    const { isAuth } = appCons();
    return (
        <Suspense
            fallback={
                <CustomLoading>
                    <Loading />
                </CustomLoading>
            }
        >
            <ApolloProvider client={servicePayment}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Protect isAuth={isAuth} path="/" component={Layout} />
                    </Switch>
                </BrowserRouter>
            </ApolloProvider>
        </Suspense>
    );
};

export default wrapComponent(App);
