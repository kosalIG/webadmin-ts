import React from 'react';
import { Button, Form } from 'antd';
import VehicleFormUI from './VehicleFormUI';
import { useModal, useAddNew } from '../api';

const Index: React.FC<{ getVehicle: () => void }> = ({ getVehicle }) => {
    const [form] = Form.useForm();
    const { visible, onCancel, onShowModal, onOk } = useModal({ form });
    const { imgObj, loading, onUploadSuccess, addVehicle } = useAddNew({ visible, onSuccess });

    function onSuccess(): void {
        getVehicle();
        onCancel();
    }

    return (
        <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={onShowModal} type="primary">
                Add New
            </Button>
            <VehicleFormUI
                title="Add New"
                visible={visible}
                form={form}
                imgObj={imgObj}
                confirmLoading={loading}
                onCancel={onCancel}
                onOk={onOk}
                onFinish={addVehicle}
                onUploadSuccess={onUploadSuccess}
            />
        </div>
    );
};

export default Index;
