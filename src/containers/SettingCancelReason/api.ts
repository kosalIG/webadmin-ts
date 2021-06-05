import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';
import { serviceOrder } from 'env';
import { GET_CANCEL_RIDER, CREAT_CANCEL_RIDER, EDIT_CANCEL_RIDER, DELETE_CANCEL_RIDER } from './gql';
import { DataObj, GetList, MetaData, UseModalProps, UseModal } from './interface';

export function getList(): GetList {
    const [qString, setqString] = useState({ status: ['ACTIVE', 'INACTIVE'], type: [], offset: 0, limit: 10 });
    const { data, refetch, loading } = useQuery(GET_CANCEL_RIDER, {
        client: serviceOrder,
        variables: { filter: { ...qString } },
    });
    const { getOrderReasonList } = data || {};
    const dataObj: DataObj = getOrderReasonList || {};

    // Handle Filter
    function onFilters(filters: any) {
        const { status = [], type = [] } = filters;
        setqString({
            ...qString,
            status: status || ['ACTIVE', 'INACTIVE'],
            type: type || [],
        });
    }

    function onRefetch(pagin?: MetaData) {
        refetch({ filter: { ...qString, ...pagin } });
    }

    return { dataObj, loading, onFilters, onRefetch };
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
    const [createOrderReason, { data, loading }] = useMutation(CREAT_CANCEL_RIDER, {
        client: serviceOrder,
        onError: () => null,
    });

    function addNew(value: any) {
        createOrderReason({ variables: { ...value, createdBy: '123' } });
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
    const [updateOrderReason, { data, loading }] = useMutation(EDIT_CANCEL_RIDER, {
        client: serviceOrder,
        onError: () => null,
    });

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
    const [deleteOrderReason, { data, loading, error }] = useMutation(DELETE_CANCEL_RIDER, {
        client: serviceOrder,
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
        if (error) {
            message.destroy();
        }
    }, [error]);

    if (loading) message.loading('deleting...', 0);

    const handleDelete = (id: string) => {
        deleteOrderReason({ variables: { id } });
    };

    return { handleDelete };
}
