import React from 'react';
import { Form, Modal } from 'antd';
import { AddNew } from 'components/ActionIcons';

import SelectUser from '../SelectUser';
import { useAddNew } from '../../api';
import AddNewForm from '../Form';

const Index: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
    const [form] = Form.useForm();
    const { visible, imageFile, loading, onShow, onCancel, setImageFile, onOk, addGroup } = useAddNew({
        form,
        onSuccess,
    });

    return (
        <div>
            <AddNew navkey="WEB:GROUP:CREATE" onClick={onShow} type="primary">
                Add New
            </AddNew>
            <Modal
                confirmLoading={loading}
                title="Add New Group"
                width={800}
                visible={visible}
                onCancel={onCancel}
                onOk={onOk}
            >
                <AddNewForm form={form} imageFile={imageFile} onFormFinish={addGroup} onUploadSuccess={setImageFile}>
                    <SelectUser />
                </AddNewForm>
            </Modal>
        </div>
    );
};

export default Index;
