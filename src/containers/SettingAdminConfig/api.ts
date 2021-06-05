import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';
import { GET_LIST, ADD_NEW, DELETE, EDIT } from './gql';
import { DataObj, GetList, UseModalProps, UseModal, MetaData } from './interface';
import { serviceAdmin } from 'env';

export function getList(): GetList {
    const [qString, setQstring] = useState({ type: [], status: [], limit: 10, offset: 0 });

    const { data, loading, refetch } = useQuery(GET_LIST, {
        client: serviceAdmin,
        variables: {
            filter: {
                ...qString,
            },
        },
    });

    const { adminConfigList } = data || {};
    const dataObj: DataObj = adminConfigList || {};

    function onPagin(pagin: MetaData) {
        setQstring({ ...qString, ...pagin });
    }

    function onRefetch(pagin?: MetaData) {
        refetch({ filter: { ...qString, ...pagin } });
    }

    // Handle filter
    function handleFilter(filters: any) {
        const preQ: any = {};

        // Status filter
        if (filters?.status) {
            preQ.status = filters?.status[0];
        }
        if (!filters?.status) {
            preQ.status = [];
        }

        // user type filter
        if (filters?.type) {
            preQ.type = filters?.type[0];
        }
        if (!filters?.type) {
            preQ.type = [];
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { type, status, ...newQString } = qString;
        setQstring({ ...newQString, ...preQ, limit: 10, offset: 0 });
    }

    return { dataObj, loading, onPagin, onRefetch, handleFilter };
}

export function useModal({ form, dataObj }: UseModalProps): UseModal {
    const [visible, setVisible] = useState(false);

    function onOk(): void {
        form.submit();
    }

    function onShowModal(): void {
        setVisible(true);
        if (dataObj) {
            form.setFieldsValue({ ...dataObj });
        }
    }

    function onCancel(): void {
        setVisible(false);
        form.resetFields();
    }
    return { visible, onOk, onShowModal, onCancel };
}

interface AddNew {
    loading: boolean;
    addNew: (value: any) => void;
}

export function useAddNew({ callback }: { callback: () => void }): AddNew {
    const [createAdminConfig, { data, loading }] = useMutation(ADD_NEW, { client: serviceAdmin, onError: () => null });

    function addNew(value: any) {
        createAdminConfig({ variables: { input: { ...value } } });
    }

    useEffect(() => {
        if (data) {
            callback();
            message.success('Add new successfully');
        }
    }, [data]);

    return { loading, addNew };
}

interface Edit {
    loading: boolean;
    onEdit: (value: any) => void;
}

export function useEdit({ callback }: { callback: () => void }): Edit {
    const [updateAdminConfig, { data, loading }] = useMutation(EDIT, { client: serviceAdmin, onError: () => null });

    function onEdit(value: any) {
        updateAdminConfig({ variables: { input: { ...value } } });
    }

    useEffect(() => {
        if (data) {
            callback();
            message.success('Edit successfully');
        }
    }, [data]);

    return { loading, onEdit };
}

export interface UseDeleete {
    handleDelete: (id: string) => void;
}

export function useDelete({ callback }: { callback: () => void }): UseDeleete {
    const [deleteAdminConfig, { data, error, loading }] = useMutation(DELETE, {
        client: serviceAdmin,
        onError: () => null,
    });

    useEffect(() => {
        if (data) {
            message.destroy();
            callback();
            message.success('Delete successfully');
        }
    }, [data]);

    useEffect(() => {
        if (data) {
            message.destroy();
        }
    }, [error]);

    if (loading) message.loading('deleting...', 0);

    const handleDelete = (id: string) => {
        deleteAdminConfig({ variables: { id } });
    };

    return { handleDelete };
}
