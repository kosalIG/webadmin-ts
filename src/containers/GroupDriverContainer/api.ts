import { useEffect, useMemo, useState } from 'react';
import { useAxios, AxiosProps } from 'util/useAxios';
import { GroupData, UseAddNewProps, UseAddNewReturn, UseGetDriver, Pagin } from './interface';

const { instance } = useAxios();
export function useGetGroup(): {
    data: GroupData | null;
    loading: boolean;
    getGroup: () => void;
    setQstring: ({ offset, limit }: Pagin) => void;
} {
    const [loading, setLoading] = useState(false);
    const [qString, setQstring] = useState({ limit: 10, offset: 0 });
    const [data, setData] = useState<GroupData | null>(null);

    useEffect(() => {
        getGroup(qString);
    }, [qString]);

    async function getGroup(params: any) {
        setLoading(true);
        const config: AxiosProps = { url: '/admin/group', params };
        const { result } = await instance({ config });
        if (result) {
            setData(result);
        }
        setLoading(false);
    }

    return { data, loading, getGroup: () => getGroup(qString), setQstring };
}

export function useAddNew({ form, data, onSuccess }: UseAddNewProps): UseAddNewReturn {
    const [imageFile, setImageFile] = useState(null);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    function onOk() {
        form.submit();
    }
    function onShow() {
        setVisible(true);
        if (data) {
            form.setFieldsValue({ ...data });
            setImageFile(data?.image);
        }
    }

    function onCancel() {
        setVisible(false);
        setImageFile(null);
        form.resetFields();
    }

    async function addGroup(param: any) {
        setLoading(true);
        const config: AxiosProps = { url: '/admin/group', data: { ...param, image: imageFile }, method: 'POST' };
        const { result } = await instance({ config, successMsg: 'Add new successfully' });
        if (result) {
            if (onSuccess) {
                onSuccess();
            }
            onCancel();
        }
        setLoading(false);
    }

    async function updateGroup(param: any) {
        setLoading(true);
        const config: AxiosProps = {
            url: '/admin/group/' + data.id,
            data: { ...param, userIds: [''], image: imageFile },
            method: 'PUT',
        };
        const { result } = await instance({ config, successMsg: 'Update successfully' });
        if (result) {
            if (onSuccess) {
                onSuccess();
            }
            onCancel();
        }
        setLoading(false);
    }

    return { visible, imageFile, loading, setImageFile, onShow, onCancel, addGroup, updateGroup, onOk };
}

export function useDelete(onSuccess: () => void): { deleteGroup: (id: string) => void } {
    async function deleteGroup(id: string) {
        const config: AxiosProps = { url: '/admin/group/' + id, method: 'DELETE' };
        const { result } = await instance({ config, loadingMsg: 'deleting ...', successMsg: 'Delete successfully' });
        if (result) {
            onSuccess();
        }
    }
    return { deleteGroup };
}

let page = 1;
export function useGetDriver(): UseGetDriver {
    const [loading, setLoading] = useState(false);
    const [records, setRecords] = useState([]);
    const [scrollDriver, setScrollDriver] = useState([]);

    useEffect(() => {
        getDriver({ offset: 0 });
    }, []);

    // update driver when scroll
    useMemo(() => {
        setRecords(scrollDriver);
    }, [scrollDriver]);

    // get list
    async function getDriver(param: any) {
        setLoading(true);
        const config: AxiosProps = { url: '/user', params: { ...param, type: 'VENDOR', limit: 50 } };
        const { result } = await instance({ config, loadingMsg: 'Fetching...' });
        if (result) {
            setRecords(result?.data);
        }
        setLoading(false);
        return { data: result?.data || [] };
    }

    // get list when scroll
    async function onScroll(e: any) {
        const { offsetHeight, scrollTop, scrollHeight } = e || {};
        const totalScroll = offsetHeight + scrollTop;
        if (totalScroll >= scrollHeight) {
            page += 1;
            const { data } = await getDriver({ offset: 50 * (page - 1) });
            setScrollDriver(uniqueUser([...scrollDriver, ...data], (it: any) => it.id));
        }
    }

    // Unique User
    function uniqueUser(arr: any[], key: any): any {
        return [...new Map(arr?.map((x) => [key(x), x])).values()];
    }

    // search user
    async function searchUser(e: any) {
        const resultUser = scrollDriver.filter((rec: any) => rec.mobileNumber.indexOf(e) >= 0);
        if (resultUser?.length) {
            setRecords(resultUser);
        }
        if (!resultUser?.length) {
            const { data } = await getDriver({ mobileNumber: e });
            setRecords(data);
        }
    }
    return { getDriver, onScroll, searchUser, records, loading };
}
