import { useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { ADD_WHITELIST, UPDATE_WHITELIST } from 'containers/Promotion/gql';
import { message } from 'antd';
import { EditForm } from '../../interface';
export function useAddPromotionWhitelist(id: number, onRefetch: (val?: any) => void): any {
    const [visible, setVisible] = useState(false);
    const [whitelist, setWhitelist] = useState<any[]>([]);
    const [addPromotionWhitelist, { data, loading }] = useMutation(ADD_WHITELIST);

    function onShowModal() {
        setVisible(true);
    }

    function onOk() {
        addPromotionWhitelist({
            variables: {
                id,
                whitelist: handleRecords(whitelist),
            },
        });
    }

    function onCancel() {
        setVisible(false);
        setWhitelist([]);
    }

    useEffect(() => {
        if (data) {
            message.success('Add whitelist successfully');
            onCancel();
            onRefetch({ limit: 10, offset: 0 });
        }
    }, [data]);

    function handleRecords(records: any[]) {
        return records
            ?.filter((item) => !item.isError)
            .map((item) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { id: ids, isNew, isError, ...newItem } = item;
                return { ...newItem };
            });
    }

    // Add new
    function addWhitelist() {
        setWhitelist([
            {
                id: `NEW${Math.random()}`,
                fullName: '',
                localNumber: '',
                countryCode: '885',
                isError: true,
                isNew: true,
            },
            ...whitelist,
        ]);
    }

    return { visible, whitelist, loading, onOk, onCancel, setWhitelist, addWhitelist, onShowModal };
}

export function useEditPromotionWhitelist({ id, form, obj, onRefetch }: EditForm): any {
    const [visible, setVisible] = useState(false);
    const [updatePromotionWhitelist, { data, loading }] = useMutation(UPDATE_WHITELIST);

    function onShowModal(): void {
        form.setFieldsValue({ ...obj });
        setVisible(true);
    }

    function onOk(): void {
        form.submit();
    }

    function onCancel(): void {
        setVisible(false);
        form.resetFields();
    }

    function onFinish(val: any): void {
        updatePromotionWhitelist({
            variables: { input: { ...val, id } },
        });
    }

    useEffect(() => {
        if (data) {
            message.success('Update whitelist successfully');
            onCancel();
            onRefetch({ limit: 10, offset: 0 });
        }
    }, [data]);

    return { visible, loading, onOk, onCancel, onShowModal, onFinish };
}
