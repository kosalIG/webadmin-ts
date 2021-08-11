import React from 'react';
import { Form } from 'antd';
import { Edit } from 'components/ActionIcons';
import FormUI from './FormUI';
import { useModal, useEdit } from '../api';

interface EditProps {
    dataObj: any;
    paymentEnum: string[];
    onRefetch: () => void;
}

const Index: React.FC<EditProps> = ({ paymentEnum, dataObj, onRefetch }) => {
    const [form] = Form.useForm();
    const { visible, onCancel, onOk, onShowModal } = useModal({ form, dataObj });
    const { loading, imageFile, onEdit, onUploadSuccess } = useEdit({ callback, visible, icon: dataObj?.icon });

    function callback() {
        onCancel();
        onRefetch();
    }

    return (
        <div>
            <Edit navkey="WEB:PAYMENT:UPDATE" onClick={onShowModal} />
            <FormUI
                title="Edit"
                form={form}
                visible={visible}
                imgFile={imageFile}
                confirmLoading={loading}
                paymentEnum={paymentEnum}
                onCancel={onCancel}
                onOk={onOk}
                onUploadSuccess={onUploadSuccess}
                onFinish={(val: any) => onEdit({ ...val, id: dataObj?.id })}
            />
        </div>
    );
};

export default Index;
