import { useState } from 'react';
import { serviceAuthenticate } from 'env';
import axios from 'axios';
import { message } from 'antd';
import { User, LoginProp } from './interface';

function useLogin(): LoginProp {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    function onLogin(data: User) {
        setLoading(true);
        axios
            .post('/auth/admin/login', data, {
                headers: { 'Content-Type': 'application/json' },
                baseURL: serviceAuthenticate,
            })
            .then((e) => {
                setData(e.data);
                setLoading(false);
            })
            .catch((er) => {
                const { response } = er || {};
                const { data: { error = {} } = {} } = response || {};
                message.error(error.message, 3);
                setLoading(false);
            });
    }
    return { loading, data, onLogin };
}
export default useLogin;
