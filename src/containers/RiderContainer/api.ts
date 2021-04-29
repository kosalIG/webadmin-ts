/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useAxios, AxiosProps } from 'util/useAxios';

export function useGetRider(): {
    loading: boolean;
    data: any;
    onSearch: (param: any) => void;
    pagination: (offset: number, limit: number) => void;
    onDelete: (id: string) => void;
} {
    const [qString, setqString] = useState({ limit: 10, offset: 0 });
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const { instance } = useAxios();

    useEffect(() => {
        getRider(qString);
    }, [qString]);

    async function getRider(param: any) {
        setLoading(true);
        const config = { url: '/user', params: { type: 'USER', ...param } };
        const { result } = await instance({ config });
        if (result) {
            setData(result);
        }
        setLoading(false);
    }

    function pagination(offset: number, limit: number): void {
        setqString({ ...qString, offset, limit });
    }

    function onSearch(param: any) {
        setqString({ ...qString, ...param, limit: 10, offset: 0 });
    }

    async function onDelete(userId: string) {
        const config: AxiosProps = { url: '/admin/user/delete/' + userId, params: { userId }, method: 'POST' };

        const { result } = await instance({
            config,
            loadingMsg: 'deleting ...',
            successMsg: 'Delete successfully',
        });

        if (result) {
            getRider(qString);
        }
    }
    return { data, loading, pagination, onSearch, onDelete };
}
