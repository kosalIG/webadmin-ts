import { useState } from 'react';

export interface UseModalProps {
    form: any;
    dataObj?: any;
}

export interface UseModal {
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
