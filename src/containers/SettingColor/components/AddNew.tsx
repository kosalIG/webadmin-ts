import React from 'react';
import { Button, Form } from 'antd';
import FormUI from './FormUI';
import { useModal, useAddNew } from '../api';

interface AddNewProps {
    getList: () => void;
}

const AddNew: React.FC<AddNewProps> = ({ getList }) => {
    const [form] = Form.useForm();
    const { visible, onShowModal, onCancel, onOk } = useModal({ form });
    const { loading, addNew } = useAddNew({ callBack });

    function callBack() {
        getList();
        onCancel();
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
            <Button onClick={onShowModal} type="primary">
                Add New
            </Button>
            <FormUI
                title="Add New"
                visible={visible}
                confirmLoading={loading}
                form={form}
                onFinish={addNew}
                onCancel={onCancel}
                onOk={onOk}
            />
        </div>
    );
};

export default AddNew;
