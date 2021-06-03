import React from 'react';
import { Button, Form } from 'antd';
import FormUI from './FormUI';
import { useModal, useAddNew } from '../api';
import { Metadata } from '../interface';

interface AddNotificationProps {
    onRefetch: (pagin: Metadata) => void;
}
const AddNotification: React.FC<AddNotificationProps> = ({ onRefetch }) => {
    const [form] = Form.useForm();
    const { loading, addNew } = useAddNew({ callback });
    const { visible, onCancel, onOk, onShowModal } = useModal({ form });

    function callback() {
        onRefetch({ limit: 10, offset: 0 });
        onCancel();
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
                <Button onClick={onShowModal} type="primary">
                    Add New
                </Button>
            </div>
            <FormUI
                form={form}
                title="Add New"
                visible={visible}
                onCancel={onCancel}
                confirmLoading={loading}
                onFinish={addNew}
                onOk={onOk}
            />
        </div>
    );
};

export default AddNotification;
