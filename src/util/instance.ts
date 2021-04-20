/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import axios, { Method } from 'axios';
import { serviceAuthenticate, authKey } from 'env';

interface AxiosProps {
    baseURL?: string;
    url: string;
    method?: Method;
    params?: unknown | undefined;
    data?: unknown | undefined;
    onBefore?: () => void;
    onSuccess?: () => void;
    onError?: () => void;
}
interface UseAxios {
    loading: boolean;
    data: any | undefined;
    onAxios: (data: AxiosProps) => void;
}

export function useAxioss(): UseAxios {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<unknown>(null);

    function onAxios({ baseURL, url, method, params, data, onBefore, onSuccess, onError }: AxiosProps) {
        if (onBefore) {
            onBefore();
        }
        setLoading(true);
        axios({
            baseURL: baseURL || serviceAuthenticate,
            url,
            params,
            method: method || 'GET',
            data,
            headers: { 'Content-Type': 'application/json', 'X-API-AUTH-KEY': authKey },
            timeout: 5000,
        })
            .then((e) => {
                setLoading(false);
                setData(e?.data);
                if (onSuccess) {
                    onSuccess();
                }
            })

            .catch(() => {
                setLoading(false);
                if (onError) {
                    onError();
                }
            });
    }
    return { loading, data, onAxios };
}
