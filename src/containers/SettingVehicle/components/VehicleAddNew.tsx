import React from 'react';
import { Form } from 'antd';
import { AddNew } from 'components/ActionIcons';
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
        <div>
            <AddNew navkey="WEB:VEHICLE:CREATE" onClick={onShowModal} type="primary">
                Add New
            </AddNew>
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
