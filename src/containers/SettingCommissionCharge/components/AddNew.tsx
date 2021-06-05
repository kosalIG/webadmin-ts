import React from 'react';
import { Form } from 'antd';
import { AddNew } from 'components/ActionIcons';
import FormUI from './FormUI';
import { useModal, useAddNew } from '../api';
import { MetaData } from '../interface';

interface AddNewProps {
    onRefetch: (pagin: MetaData) => void;
}

const Index: React.FC<AddNewProps> = ({ onRefetch }) => {
    const [form] = Form.useForm();
    const { visible, onCancel, onOk, onShowModal } = useModal({ form });
    const { loading, addNew } = useAddNew({ callback });

    function callback() {
        onCancel();
        onRefetch({ limit: 10, offset: 0 });
    }

    return (
        <div>
            <AddNew navkey="WEB:COMMISSION:CREATE" onClick={onShowModal} type="primary">
                Add New
            </AddNew>
            <FormUI
                title="Add New"
                form={form}
                visible={visible}
                confirmLoading={loading}
                onCancel={onCancel}
                onOk={onOk}
                onFinish={addNew}
            />
        </div>
    );
};

export default Index;
