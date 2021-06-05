import React from 'react';
import { Form } from 'antd';
import { Edit } from 'components/ActionIcons';
import FormUI from './FormUI';
import { useModal, useEdit } from '../api';

interface EditProps {
    dataObj: any;
    onRefetch: () => void;
}

const Index: React.FC<EditProps> = ({ dataObj, onRefetch }) => {
    const [form] = Form.useForm();
    const { visible, onCancel, onOk, onShowModal } = useModal({
        form,
        dataObj,
    });
    const { loading, onEdit } = useEdit({ callback });

    function callback() {
        onCancel();
        onRefetch();
    }

    return (
        <div>
            <Edit navkey="WEB:COMMISSION:UPDATE" onClick={onShowModal} />
            <FormUI
                isEdit
                title="Edit"
                form={form}
                visible={visible}
                confirmLoading={loading}
                onCancel={onCancel}
                onOk={onOk}
                onFinish={(val: any) => onEdit({ ...val, id: dataObj?.id })}
            />
        </div>
    );
};

export default Index;
