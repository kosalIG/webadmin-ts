import React from 'react';
import { Form, Button } from 'antd';
import { useAddNew, useModal } from '../api';
import FormUI from './FormUI';
import { Metadata } from '../interface';

const AddNew: React.FC<{ onRefetch: (pagin: Metadata) => void }> = ({ onRefetch }) => {
    const [form] = Form.useForm();
    const { visible, onOk, onShowModal, onCancel } = useModal({ form });
    const { addNew, loading } = useAddNew({ callback });

    function callback() {
        onCancel();
        onRefetch({ limit: 10, offset: 0 });
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
                <Button onClick={onShowModal} type="primary">
                    Add New
                </Button>
            </div>
            <FormUI
                onFinish={addNew}
                form={form}
                title="Add New"
                visible={visible}
                onOk={onOk}
                onCancel={onCancel}
                loading={loading}
            />
        </div>
    );
};

export default AddNew;
