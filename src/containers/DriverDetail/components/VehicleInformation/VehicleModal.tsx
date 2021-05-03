import React, { useState } from 'react';
import { Button, Modal, Form } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { DriverData, UpdateDriver, VehicleModel } from '../../interface';
import VehicleForm from './VehicleForm';

const Index: React.FC<{ driverDetail: DriverData | null; updateDriver: UpdateDriver; vehicleModel: VehicleModel }> = ({
    driverDetail,
    updateDriver,
    vehicleModel,
}) => {
    const [visible, setVible] = useState(false);
    const [form] = Form.useForm();
    const { onUpdateDriver, updateLoading, vehicleRecords, colorRecords } = updateDriver;
    const { driverInfo } = driverDetail || {};

    function onShow() {
        form.resetFields();
        setVible(true);
        form.setFieldsValue({
            ...driverInfo,
        });
    }

    function onFinish(val: any) {
        onUpdateDriver({
            driverInfo: {
                ...val,
            },
        });
        setVible(false);
        form.resetFields();
    }

    return (
        <div>
            <Button onClick={onShow} type="primary" style={{ padding: `0 10px` }} size="small">
                <EditOutlined />
                Edit
            </Button>
            <Modal
                title="Update - Vehicle info"
                onCancel={() => setVible(false)}
                onOk={() => form.submit()}
                visible={visible}
                centered
                confirmLoading={updateLoading}
            >
                <VehicleForm
                    vehicleModel={vehicleModel}
                    colorRecords={colorRecords}
                    vehicleRecords={vehicleRecords}
                    form={form}
                    onFinish={onFinish}
                    visible={visible}
                />
            </Modal>
        </div>
    );
};

export default Index;
