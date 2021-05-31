import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';
import { GET_COMMISSION_CHARGE, UPSERT_COMMISSION, DELETE_COMMISSION, SET_DEFAULT_COMMISSION } from './gql';
import { DataObj, GetList, UseModalProps, UseModal, MetaData } from './interface';

export function getList(): GetList {
    const [qString, setQstring] = useState({ status: 'ACTIVE', limit: 10, offset: 0 });

    const { data, refetch, loading } = useQuery(GET_COMMISSION_CHARGE, {
        variables: { filter: { ...qString } },
    });

    const { getCommissionCharges } = data || {};
    const dataObj: DataObj = getCommissionCharges || {};

    function onPagin(pagin: MetaData) {
        setQstring({ ...qString, ...pagin });
    }

    function onRefetch(pagin?: MetaData) {
        refetch({ filter: { ...qString, ...pagin } });
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
    const [upsertCommissionCharge, { data, loading }] = useMutation(UPSERT_COMMISSION);

    function addNew(value: any) {
        const { maxChargePerDay, ...newVal } = value;
        upsertCommissionCharge({
            variables: {
                input: {
                    ...newVal,
                    maxChargePerDay: maxChargePerDay || 0,
                    createdBy: '123',
                },
            },
        });
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
    const [upsertCommissionCharge, { data, loading }] = useMutation(UPSERT_COMMISSION);

    function onEdit(value: any) {
        const { maxChargePerDay, ...newVal } = value;
        upsertCommissionCharge({
            variables: {
                input: {
                    ...newVal,
                    maxChargePerDay: maxChargePerDay || 0,
                    createdBy: '123',
                },
            },
        });
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
    const [deleteCommissionCharge, { data, loading }] = useMutation(DELETE_COMMISSION);
    useEffect(() => {
        if (data) {
            message.destroy();
            callback();
            message.success('Delete successfully');
        }
    }, [data]);

    if (loading) message.loading('deleting...', 0);

    const handleDelete = (id: string) => {
        deleteCommissionCharge({ variables: { id } });
    };

    return { handleDelete };
}
export function useSetDefault({ callback }: { callback: () => void }): { onSetDefault: (id: string) => void } {
    const [setDefaultCommissionCharge, { data, loading }] = useMutation(SET_DEFAULT_COMMISSION);
    useEffect(() => {
        if (data) {
            message.destroy();
            callback();
            message.success('Set default successfully');
        }
    }, [data]);

    if (loading) message.loading('loading...');

    const onSetDefault = (id: string) => {
        setDefaultCommissionCharge({ variables: { id } });
    };

    return { onSetDefault };
}
