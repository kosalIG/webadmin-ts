import React from 'react';
import { Form } from 'antd';
import { AddNew } from 'components/ActionIcons';
import FormUI from './FormUI';
import { useModal, useAddNew } from '../api';

interface AddNewProps {
    getList: () => void;
}

const Index: React.FC<AddNewProps> = ({ getList }) => {
    const [form] = Form.useForm();
    const { visible, onShowModal, onCancel, onOk } = useModal({ form });
    const { loading, addNew } = useAddNew({ callBack });

    function callBack() {
        getList();
        onCancel();
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
            <AddNew navkey="WEB:COLOR:CREATE" onClick={onShowModal} type="primary">
                Add New
            </AddNew>
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

export default Index;
