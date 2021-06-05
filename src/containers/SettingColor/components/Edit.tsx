import React from 'react';
import { Form } from 'antd';
import { Edit } from 'components/ActionIcons';
import FormUI from './FormUI';
import { useModal, useEdit } from '../api';

interface EditProps {
    dataObj: any;
    getList: () => void;
}

const Index: React.FC<EditProps> = ({ dataObj, getList }) => {
    const { morevalue, ...newObj } = dataObj || {};
    const [form] = Form.useForm();
    const { visible, onShowModal, onCancel, onOk } = useModal({ form, dataObj: { ...morevalue, ...newObj } });
    const { loading, onEdit } = useEdit({ callBack });

    function callBack() {
        getList();
        onCancel();
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
            <Edit navkey="WEB:COLOR:UPDATE" onClick={onShowModal} />
            <FormUI
                title="Edit"
                visible={visible}
                confirmLoading={loading}
                isEdit
                form={form}
                onFinish={(data: any) => onEdit(dataObj?.id, data)}
                onCancel={onCancel}
                onOk={onOk}
            />
        </div>
    );
};

export default Index;
