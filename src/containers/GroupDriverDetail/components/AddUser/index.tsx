import React from 'react';
import { Modal, Form } from 'antd';
import { AddNew } from 'components/ActionIcons';

import SelectUser from './SelectUser';
import { useAddUser } from '../../api';

const Index: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
    const [form] = Form.useForm();
    const { visible, loading, onShow, onCancel, onOk, addUser } = useAddUser({ form, onSuccess });

    return (
        <div>
            <AddNew navkey="WEB:GROUP:CREATE" onClick={onShow} type="primary">
                Add New
            </AddNew>
            <Modal confirmLoading={loading} title="Add User" visible={visible} onCancel={onCancel} onOk={onOk}>
                <Form onFinish={addUser} form={form}>
                    <SelectUser />
                </Form>
            </Modal>
        </div>
    );
};

export default Index;
