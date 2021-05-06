import { useEffect, useState, useMemo } from 'react';
import { useAxios, AxiosProps } from 'util/useAxios';
import { useParams } from 'react-router-dom';
import { Data, UserData, Pagin, AddUser, AddUserProps, UseGetDriver, UseGetGroupUserList } from './interface';

const { instance } = useAxios();
export function useGetGroupDetail(): { data: Data; loading: boolean } {
    const { id } = useParams<{ id: string }>() || {};
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Data | any>();

    useEffect(() => {
        getGroup();
    }, []);

    async function getGroup() {
        setLoading(true);
        const config: AxiosProps = { url: '/admin/group/' + id };
        const { result } = await instance({ config });
        if (result) {
            setData(result);
        }
        setLoading(false);
    }

    return { data, loading };
}

export function useGetGroupUserList(): UseGetGroupUserList {
    const { id } = useParams<{ id: string }>() || {};
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState<UserData | any>();
    const [qString, setQstring] = useState({ groupId: id, limit: 10, offset: 0 });

    useEffect(() => {
        getGroupUserList(qString);
    }, [qString]);

    async function getGroupUserList(params: any) {
        setLoading(true);
        const config: AxiosProps = { url: '/admin/group/user/list', params };
        const { result } = await instance({ config });
        if (result) {
            const { data, ...newData } = result || {};
            const records = data?.map((item: any, idx: number) => ({ ...item, key: idx + 1 }));
            setUserData({ userList: records, metadata: { ...newData } });
        }
        setLoading(false);
    }
    // ON PAGIN
    function onPagin({ offset, limit }: Pagin) {
        setQstring({ ...qString, offset, limit });
    }

    // ON SEARCH
    function onSearch(fields: any): void {
        if (fields) {
            setQstring({ groupId: id, limit: 10, offset: 0, ...fields });
        }
        if (!fields) setQstring({ groupId: id, limit: 10, offset: 0 });
    }
    return { loading, userData, onSearch, getGroupUserList: () => getGroupUserList(qString), onPagin };
}

export function useAddUser({ form, onSuccess }: AddUserProps): AddUser {
    const { id } = useParams<{ id: string }>() || {};
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    function onOk(): void {
        form.submit();
    }

    function onShow(): void {
        setVisible(true);
    }

    function onCancel(): void {
        setVisible(false);
        form.resetFields();
    }

    async function addUser(data: any) {
        setLoading(true);
        const config: AxiosProps = { url: '/admin/group/user', data: { ...data, groupId: +id }, method: 'POST' };
        const { result } = await instance({ config });
        if (result) {
            onCancel();
            onSuccess();
        }
        setLoading(false);
    }
    return { visible, loading, onShow, onCancel, onOk, addUser };
}

export function useDelete(onSuccess: () => void): { deleteGroupUserList: (id: string) => void } {
    async function deleteGroupUserList(id: string) {
        const config: AxiosProps = { url: 'admin/group/user/' + id, method: 'DELETE' };
        const { result } = await instance({ config, loadingMsg: 'deleting ...', successMsg: 'Delete successfully' });
        if (result) {
            onSuccess();
        }
    }
    return { deleteGroupUserList };
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
