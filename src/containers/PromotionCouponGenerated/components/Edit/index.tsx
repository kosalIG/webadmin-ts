import React from 'react';
import { Modal, Form } from 'antd';
import { Edit } from 'components/ActionIcons';
import { useEdit } from './useEdit';
import FormUI from '../FormUI';
import { Metadata } from '../../interface';

const Index: React.FC<{ onRefetch: (meta?: Metadata) => void; dataObj?: any }> = ({ onRefetch, dataObj }) => {
    const [form] = Form.useForm();
    const { visible, loading, onShowModal, onCancel, onFinish, onOk } = useEdit({
        form,
        dataObj,
        onRefetch,
    });

    return (
        <div>
            <Edit onClick={() => onShowModal()} />
            <Modal
                title="Update - Coupon Generated"
                visible={visible}
                onCancel={onCancel}
                width={1000}
                maskClosable={false}
                onOk={onOk}
                confirmLoading={loading}
            >
                <FormUI form={form} onFinish={onFinish} isUpdate valueType={dataObj?.valueType} />
            </Modal>
        </div>
    );
};

export default Index;
