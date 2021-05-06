import React from 'react';
import { Button, Modal, Form } from 'antd';
import SelectUser from './SelectUser';
import { useAddUser } from '../../api';
import { BtnAddUser } from '../../styled';

const Index: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
    const [form] = Form.useForm();
    const { visible, loading, onShow, onCancel, onOk, addUser } = useAddUser({ form, onSuccess });

    return (
        <BtnAddUser>
            <Button type="primary" onClick={onShow}>
                Add New
            </Button>
            <Modal confirmLoading={loading} title="Add User" visible={visible} onCancel={onCancel} onOk={onOk}>
                <Form onFinish={addUser} form={form}>
                    <SelectUser />
                </Form>
            </Modal>
        </BtnAddUser>
    );
};

export default Index;
