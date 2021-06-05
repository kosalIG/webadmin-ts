import React from 'react';
import { Form } from 'antd';
import { Edit } from 'components/ActionIcons';
import { useEdit, useModal } from '../api';
import FormUI from './FormUI';
import { Metadata } from '../interface';

const Index: React.FC<{ dataObj: any; onRefetch: (pagin?: Metadata) => void }> = ({ dataObj, onRefetch }) => {
    const [form] = Form.useForm();
    const { visible, onOk, onShowModal, onCancel } = useModal({ form, dataObj });
    const { onEdit, loading } = useEdit({ callback });

    function callback() {
        onCancel();
        onRefetch();
    }

    return (
        <div>
            <Edit navkey="WEB:CURRENCY:UPDATE" onClick={onShowModal} />
            <FormUI
                onFinish={(value: any) => onEdit({ ...value, id: dataObj?.id })}
                form={form}
                title="Edit"
                visible={visible}
                onOk={onOk}
                onCancel={onCancel}
                loading={loading}
                isEdit
            />
        </div>
    );
};

export default Index;
