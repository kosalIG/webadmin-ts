import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';
import { serviceAdmin } from 'env';
import { GET_STORE_CONTROL, ADD_STORE_CONTROL, UPDATE_STORE_CONTROL, DELETE_STORE_CONTROL } from './gql';
import { DataObj, GetList, UseModalProps, UseModal } from './interface';

export function getList(): GetList {
    const { data, refetch, loading } = useQuery(GET_STORE_CONTROL, {
        client: serviceAdmin,
    });
    const { storeControlList } = data || {};
    const dataObj: DataObj = storeControlList || {};

    return { dataObj, loading, refetch };
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
    const [createStoreControl, { data, loading }] = useMutation(ADD_STORE_CONTROL, { client: serviceAdmin });

    function addNew(value: any) {
        createStoreControl({ variables: { ...value, createdBy: '123' } });
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
    const [updateOrderReason, { data, loading }] = useMutation(UPDATE_STORE_CONTROL, { client: serviceAdmin });

    function onEdit(value: any) {
        updateOrderReason({ variables: { ...value, updatedBy: '123' } });
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
    const [deleteStoreControl, { data, loading }] = useMutation(DELETE_STORE_CONTROL, { client: serviceAdmin });
    useEffect(() => {
        if (data) {
            message.destroy();
            callback();
            message.success('Delete successfully');
        }
    }, [data]);

    if (loading) message.loading('deleting...', 0);

    const handleDelete = (id: string) => {
        deleteStoreControl({ variables: { id } });
    };

    return { handleDelete };
}
