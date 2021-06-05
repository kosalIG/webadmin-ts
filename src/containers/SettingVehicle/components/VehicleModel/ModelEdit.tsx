import React from 'react';
import { Form } from 'antd';
import { Edit } from 'components/ActionIcons';
import { useModal, useEdit } from './modelApi';
import VehicleModelFormUI from './ModelFormUI';
import { VehicleModelAddNewProps } from './interface';

const VehicleModelEdit: React.FC<VehicleModelAddNewProps> = ({ vehicleId, dataObj, getModel }) => {
    const [form] = Form.useForm();
    const { visible, onCancel, onOk, onShowModal } = useModal({ form, dataObj, callback });
    const { file, loading, editVehicleModel, onUploadSuccess } = useEdit({
        modelId: dataObj?.id,
        vehicleId,
        visible,
        onSuccess,
    });

    function onSuccess(): void {
        getModel();
        onCancel();
    }

    function callback(): void {
        onUploadSuccess(dataObj?.morevalue?.image);
    }

    return (
        <div>
            <Edit navkey="WEB:VEHICLE:UPDATE" onClick={onShowModal} />
            <VehicleModelFormUI
                title="Edit - Vehicle Model"
                visible={visible}
                form={form}
                file={file}
                confirmLoading={loading}
                onCancel={onCancel}
                onOk={onOk}
                onFinish={editVehicleModel}
                onUploadSuccess={onUploadSuccess}
            />
        </div>
    );
};

export default VehicleModelEdit;
