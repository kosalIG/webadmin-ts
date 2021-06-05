import React from 'react';
import { Form } from 'antd';
import { Edit } from 'components/ActionIcons';
import VehicleFormUI from './VehicleFormUI';
import { useModal, useEdit } from '../api';

const Index: React.FC<{ getVehicle: () => void; dataObj: any }> = ({ getVehicle, dataObj }) => {
    const [form] = Form.useForm();
    const { attributes, costPerKm, costPerMinute, minimumFare, cost, currencyCode, name, id } = dataObj || {};
    const { orderFee, orderNo, totalSeat, busyMapIcon, mapIcon, icon, image } = attributes || {};
    const formData = {
        name,
        orderFee: Number(orderFee),
        orderNo: Number(orderNo),
        totalSeat: Number(totalSeat),
        itemPrices: [
            {
                costPerKm,
                costPerMinute,
                minimumFare,
                cost,
                currencyCode,
            },
        ],
    };

    const { visible, onCancel, onShowModal, onOk } = useModal({
        form,
        dataObj: { ...formData },
        callback,
    });

    const { imgObj, loading, onUploadSuccess, editVehicle } = useEdit({ visible, vehicleId: id, onSuccess });

    function onSuccess(): void {
        getVehicle();
        onCancel();
    }

    function callback(): void {
        onUploadSuccess({ busyMapIcon, mapIcon, icon, image });
    }

    return (
        <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'flex-end' }}>
            <Edit navkey="WEB:VEHICLE:UPDATE" onClick={onShowModal} />
            <VehicleFormUI
                title="Edit"
                visible={visible}
                form={form}
                imgObj={imgObj}
                confirmLoading={loading}
                onCancel={onCancel}
                onOk={onOk}
                onFinish={editVehicle}
                onUploadSuccess={onUploadSuccess}
            />
        </div>
    );
};

export default Index;
