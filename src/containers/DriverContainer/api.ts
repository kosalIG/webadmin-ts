import { useState, useEffect } from 'react';
import { useAxios, AxiosProps } from 'util/useAxios';
import { gql } from '@apollo/client';

export function useGetDriver(): {
    loading: boolean;
    data: any;
    driverGroup: any[];
    onSearch: (param: any) => void;
    pagination: (offset: number, limit: number) => void;
    onDelete: (id: string) => void;
    onChange: (filter: any) => void;
} {
    const [qString, setqString] = useState({ limit: 10, offset: 0 });
    const [data, setData] = useState({});
    const [driverGroup, setDriverGroup] = useState([]);
    const [loading, setLoading] = useState(false);
    const { instance } = useAxios();

    useEffect(() => {
        getDriverGroup();
    }, []);

    useEffect(() => {
        getDriver(qString);
    }, [qString]);

    async function getDriver(param: any) {
        setLoading(true);
        const config = { url: '/user', params: { type: 'VENDOR', ...param } };
        const { result } = await instance({ config });
        if (result) {
            setData(result);
        }
        setLoading(false);
    }

    async function getDriverGroup() {
        const config = { url: '/admin/group', params: { limt: 50, offset: 0 } };
        const { result } = await instance({ config });

        if (result) {
            const records = result.data?.map((item: { id: string; name: string }) => ({
                value: item.id,
                text: item.name,
            }));
            setDriverGroup(records);
        }
    }

    function pagination(offset: number, limit: number): void {
        setqString({ ...qString, offset, limit });
    }

    function onSearch(param: any) {
        setqString({ ...qString, ...param, limit: 10, offset: 0 });
    }

    // FILTER DRIVER BY VERIFY TYPE
    function onChange(filters: any) {
        // Verify Driver
        if (!filters?.driverInfo) {
            setqString((qSt) => ({ ...qSt, verifyDriverLicense: undefined }));
        }
        if (filters?.driverInfo) {
            const val = filters?.driverInfo[0];
            setqString((qSt) => ({ ...qSt, verifyDriverLicense: !!+val, limit: 10, offset: 0 }));
        }

        // Driver Group
        if (!filters?.group) {
            setqString((qSt) => ({ ...qSt, groupId: undefined }));
        }
        if (filters?.group) {
            const val = filters?.group[0];
            setqString((qSt) => ({ ...qSt, groupId: +val, limit: 10, offset: 0 }));
        }
    }

    async function onDelete(userId: string) {
        const config: AxiosProps = { url: '/admin/user/delete/' + userId, params: { userId }, method: 'POST' };

        const { result } = await instance({
            config,
            loadingMsg: 'deleting ...',
            successMsg: 'Delete successfully',
        });

        if (result) {
            getDriver(qString);
        }
    }
    return { data, loading, driverGroup, pagination, onSearch, onDelete, onChange };
}

export const TOPUP = gql`
    mutation QwiqTopUp($input: QwiqTopUpInput!) {
        qwiqTopUp(input: $input) {
            amount
        }
    }
`;
