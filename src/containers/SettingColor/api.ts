import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useAxios, AxiosProps } from 'util/useAxios';

interface GetList {
    loading: boolean;
    records: any[];
    getList: () => void;
}

export function useGetlist(): GetList {
    const { instance } = useAxios();
    const [loading, setLoading] = useState(false);
    const [records, setRecords] = useState<any>([]);

    useEffect(() => {
        getList();
    }, []);

    async function getList() {
        setLoading(true);
        const config: AxiosProps = { url: '/color' };
        const { result } = await instance({ config });
        if (result) {
            setRecords(result);
        }
        setLoading(false);
    }

    return { loading, records, getList };
}

interface UseModalProps {
    form: any;
    dataObj?: any;
}

interface UseModal {
    visible: boolean;
    onOk: () => void;
    onShowModal: () => void;
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

interface UseAddNewProps {
    callBack: () => void;
}

interface UseAddNew {
    loading: boolean;
    addNew: (data: any) => void;
}

export function useAddNew({ callBack }: UseAddNewProps): UseAddNew {
    const { instance } = useAxios();
    const [loading, setLoading] = useState(false);

    async function addNew(data: any) {
        setLoading(true);
        const config: AxiosProps = { url: '/color', method: 'POST', data };
        const { result } = await instance({ config });
        if (result) {
            message.success('Add new successfully');
            callBack();
        }
        setLoading(false);
    }

    return { loading, addNew };
}

interface UseEditProps {
    callBack: () => void;
}

interface UseEdit {
    loading: boolean;
    onEdit: (id: string, data: any) => void;
}

export function useEdit({ callBack }: UseEditProps): UseEdit {
    const { instance } = useAxios();
    const [loading, setLoading] = useState(false);

    async function onEdit(id: string, data: any) {
        setLoading(true);
        const config: AxiosProps = { url: '/color/' + id, method: 'POST', data };
        const { result } = await instance({ config });
        if (result) {
            message.success('Edit successfully');
            callBack();
        }
        setLoading(false);
    }

    return { loading, onEdit };
}

interface UseDeleteProps {
    callBack: () => void;
}

interface UseDelete {
    onDelete: (id: string) => void;
}

export function useDelete({ callBack }: UseDeleteProps): UseDelete {
    const { instance } = useAxios();

    async function onDelete(id: string) {
        message.loading('deleting ...', 0);
        const config: AxiosProps = { url: '/color/delete/' + id, method: 'POST' };
        const { result } = await instance({ config });
        if (result) {
            message.success('Delete  successfully');
            callBack();
        }
        message.destroy();
    }

    return { onDelete };
}
