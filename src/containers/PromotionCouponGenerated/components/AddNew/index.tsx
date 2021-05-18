import React from 'react';
import { Button, Modal, Form } from 'antd';

import { useAddNew } from './useAddNew';
import FormUI from '../FormUI';
import { Metadata } from '../../interface';

const Index: React.FC<{ onRefetch: (meta?: Metadata) => void }> = ({ onRefetch }) => {
    const [form] = Form.useForm();
    const { visible, loading, onShowModal, onCancel, onFinish, onOk } = useAddNew({
        form,
        onRefetch,
    });

    return (
        <div>
            <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={onShowModal} type="primary">
                    Add new
                </Button>
            </div>
            <Modal
                title="Add New - Coupon Generated"
                visible={visible}
                onCancel={onCancel}
                width={1000}
                maskClosable={false}
                onOk={onOk}
                confirmLoading={loading}
            >
                <FormUI form={form} onFinish={onFinish} />
            </Modal>
        </div>
    );
};

export default Index;
