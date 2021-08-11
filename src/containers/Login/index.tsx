import React, { useEffect } from 'react';
import LoginFrom from './components/LoginForm';
import { useAppConsummer } from 'util/appContext';
import { Redirect } from 'react-router-dom';
import useLogin from './api';
import { User } from './interface';

const Index: React.FC = () => {
    const { isAuth, login } = useAppConsummer();
    const { loading, data, onLogin } = useLogin();
    function handleLogin(data: User) {
        // login();
        onLogin(data);
    }

    useEffect(() => {
        if (data) {
            login(data);
        }
    }, [data]);

    if (isAuth) return <Redirect to="/dashboard" />;

    return <LoginFrom loading={loading} onFinish={handleLogin} />;
};

export default Index;
