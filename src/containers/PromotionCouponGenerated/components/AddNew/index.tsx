import React from 'react';
import { Modal, Form } from 'antd';
import { AddNew } from 'components/ActionIcons';

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
            <AddNew navkey="WEB:GENERATED_COUPON:CREATE" onClick={onShowModal} type="primary">
                Add new
            </AddNew>
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
