import React from 'react';
import { Form } from 'antd';
import { Edit } from 'components/ActionIcons';
import FormUI from './FormUI';
import { useModal, useEdit } from '../api';
import moment from 'moment';

interface EditProps {
    dataObj: any;
    onRefetch: () => void;
}

const Index: React.FC<EditProps> = ({ dataObj, onRefetch }) => {
    const [form] = Form.useForm();
    const { startedAt, endedAt, ...newData } = dataObj || {};

    const { visible, onCancel, onOk, onShowModal } = useModal({
        form,
        dataObj: { ...newData, startedAt: startedAt && moment(startedAt), endedAt: endedAt && moment(endedAt) },
    });
    const { loading, onEdit } = useEdit({ callback });

    function callback() {
        onCancel();
        onRefetch();
    }

    return (
        <div>
            <Edit navkey="WEB:ADMIN_CONFIG:UPDATE" onClick={onShowModal} />
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
