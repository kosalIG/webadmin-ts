import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { serviceAdmin } from 'env';
import { GET_NOTIFICATION, ADD_NOTIFICATION, UPDATE_NOTIFICATION, PUSH_NOTIFICATION, DELETE_NOTIFICATION } from './gql';
import { Data, Metadata } from './interface';
import message from 'antd/lib/message';

interface UseGetList {
    dataObj: Data;
    loading: boolean;
    onRefetch: (pagin: Metadata) => void;
    onPagin: (pagin: Metadata) => void;
}
export function useGetList(): UseGetList {
    const [qString, setQstring] = useState({ limit: 10, offsets: 0 });

    const { loading, data, refetch } = useQuery(GET_NOTIFICATION, {
        variables: { ...qString },
        client: serviceAdmin,
    });
    const { notificationList } = data || {};
    const dataObj: Data = notificationList || {};

    function onPagin(pagin: Metadata) {
        setQstring({ ...qString, ...pagin });
    }

    function onRefetch(pagin?: Metadata) {
        refetch({ ...qString, ...pagin });
    }

    return { dataObj, loading, onRefetch, onPagin };
}

interface UseModalProps {
    form: any;
    dataObj?: any;
}

interface UseModal {
    visible: boolean;
    onOk: () => void;
    onShowModal?: () => void;
    onCancel: () => void;
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
    const [createNotification, { data, loading }] = useMutation(ADD_NOTIFICATION, {
        client: serviceAdmin,
        onError: () => null,
    });

    function addNew(value: any) {
        const { description, ...newValue } = value;
        createNotification({ variables: { ...newValue, description: { kh: description }, createdBy: '123' } });
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
    const [updateNotification, { data, loading }] = useMutation(UPDATE_NOTIFICATION, {
        client: serviceAdmin,
        onError: () => null,
    });

    function onEdit(value: any) {
        const { description, ...newValue } = value;
        updateNotification({ variables: { ...newValue, description: { kh: description }, createdBy: '123' } });
    }

    useEffect(() => {
        if (data) {
            callback();
            message.success('Edit successfully');
        }
    }, [data]);

    return { loading, onEdit };
}

interface UsePushNotification {
    onPushNotification: (id: string) => void;
}

export function usePushNotification({ onRefetch }: { onRefetch: (param?: any) => void }): UsePushNotification {
    const [pushNotification, { data, error }] = useMutation(PUSH_NOTIFICATION, {
        client: serviceAdmin,
        onError: () => null,
    });
    useEffect(() => {
        if (data) {
            message.destroy();
            message.success('Push successfully');
            onRefetch();
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            message.destroy();
        }
    }, [error]);

    const onPushNotification = (id: string) => {
        message.loading('sent...', 0);
        pushNotification({ variables: { id } });
    };

    return { onPushNotification };
}

interface UseDeleteNotification {
    onDeleteNotification: (id: string) => void;
}

export function useDeleteNotification({ onRefetch }: { onRefetch: (param?: any) => void }): UseDeleteNotification {
    const [deleteNotification, { data, error }] = useMutation(DELETE_NOTIFICATION, {
        client: serviceAdmin,
        onError: () => null,
    });
    useEffect(() => {
        if (data) {
            message.destroy();
            message.success('Delete successfully');
            onRefetch();
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            message.destroy();
        }
    }, [error]);

    const onDeleteNotification = (id: string) => {
        message.loading('deleting...', 0);
        deleteNotification({ variables: { id } });
    };

    return { onDeleteNotification };
}
