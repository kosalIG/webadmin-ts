import { useMutation } from '@apollo/client';
import { message } from 'antd';
import { EditForm } from 'containers/PromotionCoupon/interface';
import { ADD_WHITELIST, UPDATE_WHITELIST } from 'containers/PromotionCoupon/gql';
import { useEffect, useState } from 'react';

export function useAddNew({
    form,
    id,
    onRefetch,
}: {
    form: any;
    id: any;
    onRefetch: (val: any) => void;
}): {
    visible: boolean;
    loading: boolean;
    onOK: () => void;
    onCancel: () => void;
    onFinish: (val: any[]) => void;
    onShowModal: () => void;
} {
    const [visible, setVisible] = useState(false);
    const [addPromotionWhitelist, { data, loading }] = useMutation(ADD_WHITELIST);

    // on show modal
    function onShowModal(): void {
        setVisible(true);
    }

    // onOK
    function onOK(): void {
        form.submit();
    }

    // onCancel
    function onCancel(): void {
        form.resetFields(['promotionWhitelists']);
        setVisible(false);
    }

    // onFinish
    function onFinish(val: any): void {
        const { promotionWhitelists } = val;
        addPromotionWhitelist({
            variables: { id, whitelist: promotionWhitelists },
        });
    }

    useEffect(() => {
        if (data) {
            message.success('Add whitelist successfully');
            onRefetch({ limit: 10, offset: 0 });
            onCancel();
        }
    }, [data]);

    return { visible, loading, onOK, onCancel, onFinish, onShowModal };
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
