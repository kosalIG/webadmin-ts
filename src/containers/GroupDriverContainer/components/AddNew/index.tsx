import React from 'react';
import { Button, Form, Modal } from 'antd';

import SelectUser from '../SelectUser';
import { useAddNew } from '../../api';
import { BtnContainer } from '../style';
import AddNewForm from '../Form';

const Index: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
    const [form] = Form.useForm();
    const { visible, imageFile, loading, onShow, onCancel, setImageFile, onOk, addGroup } = useAddNew({
        form,
        onSuccess,
    });

    return (
        <BtnContainer>
            <Button onClick={onShow} type="primary">
                Add New
            </Button>
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
        </BtnContainer>
    );
};

export default Index;
