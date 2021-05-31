import React from 'react';
import { Button, Form } from 'antd';
import FormUI from './FormUI';
import { useModal, useAddNew } from '../api';

interface AddNewProps {
    onRefetch: (pagin: any) => void;
}

const AddNew: React.FC<AddNewProps> = ({ onRefetch }) => {
    const [form] = Form.useForm();
    const { visible, onCancel, onOk, onShowModal } = useModal({ form });
    const { loading, addNew } = useAddNew({ callback });

    function callback() {
        onCancel();
        onRefetch({ limit: 10, offset: 0 });
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
            <Button onClick={onShowModal} type="primary">
                Add New
            </Button>
            <FormUI
                title="Add New"
                form={form}
                visible={visible}
                confirmLoading={loading}
                onCancel={onCancel}
                onOk={onOk}
                onFinish={addNew}
            />
        </div>
    );
};

export default AddNew;
