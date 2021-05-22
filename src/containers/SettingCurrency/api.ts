import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';

import { Metadata, Data, UseModalProps, UseModal, UseDeleete } from './interface';
import { ADD_CURRENCY, GET_CURRENCY, EDIT_CURRENCY, DELETE_CURRENCY, SET_DEFAULT } from './gql';

interface Getlist {
    dataObj: Data;
    loading: boolean;
    onPagin: (pagin: Metadata) => void;
    onRefetch: (pagin?: Metadata) => void;
}

export function useGetList(): Getlist {
    const [qString, setQstring] = useState({ limit: 10, offset: 0 });
    const { data, loading, refetch } = useQuery(GET_CURRENCY, {
        variables: { ...qString },
    });
    const { getCurrencies } = data || {};
    const dataObj: Data = getCurrencies || {};

    function onPagin(pagin: Metadata) {
        setQstring({ ...qString, ...pagin });
    }

    function onRefetch(pagin?: Metadata) {
        refetch({ ...qString, ...pagin });
    }

    return { dataObj, loading, onPagin, onRefetch };
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
    const [upsertCurrency, { data, loading }] = useMutation(ADD_CURRENCY);

    function addNew(value: any) {
        upsertCurrency({ variables: { ...value, createdBy: '123' } });
    }

    useEffect(() => {
        if (data) {
            callback();
            message.success('Add new successfully');
        }
    }, [data]);

    return { loading, addNew };
}

interface UseEdit {
    loading: boolean;
    onEdit: (value: any) => void;
}

export function useEdit({ callback }: { callback: () => void }): UseEdit {
    const [upsertCurrency, { data, loading }] = useMutation(EDIT_CURRENCY);

    function onEdit(value: any) {
        upsertCurrency({ variables: { ...value, createdBy: '123' } });
    }

    useEffect(() => {
        if (data) {
            callback();
            message.success('Update successfully');
        }
    }, [data]);

    return { loading, onEdit };
}

export function useDelete({ callback }: { callback: () => void }): UseDeleete {
    const [deleteCurrency, { data, loading }] = useMutation(DELETE_CURRENCY);
    useEffect(() => {
        if (data) {
            message.destroy();
            callback();
            message.success('Delete successfully');
        }
    }, [data]);

    if (loading) message.loading('deleting...');

    const handleDelete = (id: string) => {
        deleteCurrency({ variables: { id } });
    };

    return { handleDelete };
}

export function useSetDefault({ callback }: { callback: () => void }): { onSetDefault: (id: string) => void } {
    const [setDefaultCurrency, { data, loading }] = useMutation(SET_DEFAULT);
    useEffect(() => {
        if (data) {
            message.destroy();
            callback();
            message.success('Set default successfully');
        }
    }, [data]);

    if (loading) message.loading('loading...');

    const onSetDefault = (id: string) => {
        setDefaultCurrency({ variables: { id } });
    };

    return { onSetDefault };
}
