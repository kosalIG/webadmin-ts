import React from 'react';
import { Modal, Form } from 'antd';
import { Copy } from 'components/ActionIcons';
import { useAddNew } from './useAddNew';
import FormUI from '../FormUI';
import { Metadata } from '../../interface';

const Index: React.FC<{ onRefetch: (meta?: Metadata) => void; dataObj?: any }> = ({ onRefetch, dataObj }) => {
    const [form] = Form.useForm();
    const { visible, tags, loading, onShowModal, onCancel, onFinish, onOk, setTags } = useAddNew({
        form,
        dataObj,
        onRefetch,
    });

    return (
        <div>
            <Copy onClick={() => onShowModal()} />
            <Modal
                title="Add New - Coupon"
                visible={visible}
                onCancel={onCancel}
                width={1000}
                maskClosable={false}
                onOk={onOk}
                confirmLoading={loading}
            >
                <FormUI form={form} onFinish={onFinish} tags={tags} setTags={setTags} valueType={dataObj?.valueType} />
            </Modal>
        </div>
    );
};

export default Index;
