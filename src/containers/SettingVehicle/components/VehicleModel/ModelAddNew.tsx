import React from 'react';
import { Button, Form } from 'antd';
import { useModal, useAddNew } from './modelApi';
import VehicleModelFormUI from './ModelFormUI';
import { VehicleModelAddNewProps } from './interface';

const VehicleModelAddNew: React.FC<VehicleModelAddNewProps> = ({ vehicleId, getModel }) => {
    const [form] = Form.useForm();
    const { visible, onCancel, onOk, onShowModal } = useModal({ form });
    const { file, loading, addVehicleModel, onUploadSuccess } = useAddNew({ vehicleId, visible, onSuccess });

    function onSuccess(): void {
        getModel();
        onCancel();
    }

    return (
        <div>
            <Button onClick={onShowModal} style={{ width: '550px', margin: `10px 0 0` }} type="dashed">
                Add New
            </Button>
            <VehicleModelFormUI
                title="Add New - Vehicle Model"
                visible={visible}
                form={form}
                file={file}
                confirmLoading={loading}
                onCancel={onCancel}
                onOk={onOk}
                onFinish={addVehicleModel}
                onUploadSuccess={onUploadSuccess}
            />
        </div>
    );
};

export default VehicleModelAddNew;
