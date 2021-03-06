import React from 'react';
import { Form } from 'antd';
import { AddNew } from 'components/ActionIcons';
import FormUI from './FormUI';
import { useModal, useAddNew } from '../api';

interface AddNewProps {
    paymentEnum: string[];
    onRefetch: (pagin: any) => void;
}

const Index: React.FC<AddNewProps> = ({ paymentEnum, onRefetch }) => {
    const [form] = Form.useForm();
    const { visible, onCancel, onOk, onShowModal } = useModal({ form });
    const { loading, imageFile, onUploadSuccess, addNew } = useAddNew({ visible, callback });

    function callback() {
        onCancel();
        onRefetch({ limit: 10, offset: 0 });
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
            <AddNew navkey="WEB:PAYMENT:CREATE" onClick={onShowModal} type="primary">
                Add New
            </AddNew>
            <FormUI
                title="Add New"
                form={form}
                visible={visible}
                confirmLoading={loading}
                imgFile={imageFile}
                paymentEnum={paymentEnum}
                onCancel={onCancel}
                onOk={onOk}
                onFinish={addNew}
                onUploadSuccess={onUploadSuccess}
            />
        </div>
    );
};

export default Index;
