import React from 'react';
import { Form, Modal } from 'antd';
import { Edit } from 'components/ActionIcons';
import { useAddNew } from '../../api';
import EditForm from '../Form';

const Index: React.FC<{ data: any; onSuccess: () => void }> = ({ data, onSuccess }) => {
    const [form] = Form.useForm();
    const { visible, imageFile, loading, onShow, onCancel, setImageFile, onOk, updateGroup } = useAddNew({
        form,
        data,
        onSuccess,
    });
    return (
        <div>
            <Edit navkey="WEB:GROUP:UPDATE" onClick={onShow} />
            <Modal
                confirmLoading={loading}
                title="Edit Group"
                width={800}
                visible={visible}
                onCancel={onCancel}
                onOk={onOk}
            >
                <EditForm form={form} imageFile={imageFile} onFormFinish={updateGroup} onUploadSuccess={setImageFile} />
            </Modal>
        </div>
    );
};

export default Index;
