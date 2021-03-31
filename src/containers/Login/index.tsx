import React from 'react';
import LoginFrom from './components/LoginForm';
import { appCons } from 'util/appContext';
import { Redirect } from 'react-router-dom';

const Index: React.FC = () => {
    const { isAuth, login } = appCons();

    function handleLogin() {
        login();
    }

    if (isAuth) return <Redirect to="/" />;
    return <LoginFrom onFinish={handleLogin} />;
};

export default Index;
