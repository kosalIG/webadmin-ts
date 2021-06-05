import React from 'react';
import { Form } from 'antd';
import { AddNew } from 'components/ActionIcons';
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
            <AddNew navkey="WEB:NOTIFICATION:CREATE" onClick={onShowModal} type="primary">
                Add New
            </AddNew>
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
