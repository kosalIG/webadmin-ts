import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';
import { GET_PAYMENT_TYPE, UPSERT_PAYMENT_TYPE, DELETE_PAYMENT } from './gql';
import { DataObj, GetList, MetaData, UseModalProps, UseModal } from './interface';

export function getList(): GetList {
    const [qString] = useState({ limit: 10, offset: 0 });
    const { data, refetch, loading } = useQuery(GET_PAYMENT_TYPE, {
        variables: { filter: { ...qString } },
    });
    const { getPaymentTypes } = data || {};
    const dataObj: DataObj = getPaymentTypes || {};

    function onRefetch(pagin?: MetaData) {
        refetch({ filter: { ...qString, ...pagin } });
    }

    return { dataObj, loading, onRefetch };
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
    imageFile: string | null;
    addNew: (value: any) => void;
    onUploadSuccess: (file: string) => void;
}

export function useAddNew({ visible, callback }: { callback: () => void; visible: boolean }): AddNew {
    const [imageFile, setImageFile] = useState<string | null>(null);
    const [upsertPaymentType, { data, loading }] = useMutation(UPSERT_PAYMENT_TYPE);

    function addNew(value: any) {
        upsertPaymentType({ variables: { input: { ...value, icon: imageFile, createdBy: '123' } } });
    }

    function onUploadSuccess(file: string) {
        setImageFile(file);
    }

    useEffect(() => {
        if (!visible) {
            setImageFile(null);
        }
    }, [visible]);

    useEffect(() => {
        if (data) {
            callback();
            message.success('Add new successfully');
        }
    }, [data]);

    return { loading, imageFile, addNew, onUploadSuccess };
}

interface Edit {
    loading: boolean;
    imageFile: string | null;
    onEdit: (value: any) => void;
    onUploadSuccess: (file: string) => void;
}

export function useEdit({ callback, visible, icon }: { callback: () => void; visible: boolean; icon: string }): Edit {
    const [imageFile, setImageFile] = useState<string | null>(null);
    const [upsertPaymentType, { data, loading }] = useMutation(UPSERT_PAYMENT_TYPE);

    function onEdit(value: any) {
        upsertPaymentType({ variables: { input: { ...value, icon: imageFile, createdBy: '123' } } });
    }

    function onUploadSuccess(file: string) {
        setImageFile(file);
    }

    useEffect(() => {
        if (!visible) {
            setImageFile(null);
        }
        if (visible) {
            setImageFile(icon);
        }
    }, [visible]);

    useEffect(() => {
        if (data) {
            callback();
            message.success('Edit successfully');
        }
    }, [data]);

    return { loading, imageFile, onEdit, onUploadSuccess };
}

export interface UseDeleete {
    handleDelete: (id: string) => void;
}

export function useDelete({ callback }: { callback: () => void }): UseDeleete {
    const [deletePaymentType, { data, loading }] = useMutation(DELETE_PAYMENT);
    useEffect(() => {
        if (data) {
            message.destroy();
            callback();
            message.success('Delete successfully');
        }
    }, [data]);

    if (loading) message.loading('deleting...');

    const handleDelete = (id: string) => {
        deletePaymentType({ variables: { id } });
    };

    return { handleDelete };
}
