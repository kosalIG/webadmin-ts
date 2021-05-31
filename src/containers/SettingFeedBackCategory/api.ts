import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { message } from 'antd';
import { GET_FEEDBACK_CATEGORY, ADD_FEEDBACK_CATEGORY, EDIT_FEEDBACK_CATEGORY, DELETE_FEEDBACK_CATEGORY } from './gql';
import { DataObj, GetList, MetaData, UseModalProps, UseModal } from './interface';
import { serviceFeedback } from 'env';

export function getList(): GetList {
    const [qString] = useState({ limit: 10, offset: 0, status: 'ACTIVE' });
    const { data, refetch, loading } = useQuery(GET_FEEDBACK_CATEGORY, {
        client: serviceFeedback,
        variables: { ...qString },
    });
    const { getFeedbackCategories } = data || {};
    const dataObj: DataObj = getFeedbackCategories || {};

    function onRefetch(pagin?: MetaData) {
        refetch({ ...qString, ...pagin });
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
    const [upsertFeedbackCategory, { data, loading }] = useMutation(ADD_FEEDBACK_CATEGORY, { client: serviceFeedback });

    function addNew(value: any) {
        upsertFeedbackCategory({ variables: { createdBy: '123', ...value, icon: imageFile || '' } });
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
    const [upsertFeedbackCategory, { data, loading }] = useMutation(EDIT_FEEDBACK_CATEGORY, {
        client: serviceFeedback,
    });

    function onEdit(value: any) {
        upsertFeedbackCategory({ variables: { updatedBy: '123', ...value, icon: imageFile || '' } });
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
    const [deleteFeedbackCategory, { data, loading }] = useMutation(DELETE_FEEDBACK_CATEGORY, {
        client: serviceFeedback,
    });
    useEffect(() => {
        if (data) {
            message.destroy();
            callback();
            message.success('Delete successfully');
        }
    }, [data]);

    if (loading) message.loading('deleting...', 0);

    const handleDelete = (id: string) => {
        deleteFeedbackCategory({ variables: { id } });
    };

    return { handleDelete };
}
