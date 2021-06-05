import React from 'react';
import { Form } from 'antd';
import { AddNew } from 'components/ActionIcons';
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
            <AddNew
                noStyle
                navkey="WEB:VEHICLE:CREATE"
                onClick={onShowModal}
                style={{ width: '550px', margin: `10px 0 0` }}
                type="dashed"
            >
                Add New
            </AddNew>
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
