import React, { useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import { VehicleModel } from '../../interface';

const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const Index: React.FC<{
    onFinish: (val: any) => void;
    form: any;
    visible: boolean;
    vehicleRecords: any[];
    colorRecords: any[];
    vehicleModel: VehicleModel;
}> = ({ onFinish, form, visible, vehicleRecords, vehicleModel, colorRecords }) => {
    const { getVehicleModel, modelRecords } = vehicleModel;

    useEffect(() => {
        if (visible) {
            const vehicleType = form.getFieldValue('vehicleType');
            if (vehicleType) {
                getVehicleModel(vehicleType);
            }
        }
    }, [visible]);

    // Handle Vehicle
    function handleVehicle(id: string) {
        form.resetFields(['modelId']);
        getVehicleModel(id);
    }

    return (
        <Form onFinish={onFinish} form={form} {...layout} initialValues={{ modelId: '', vehicleType: '' }}>
            <Form.Item rules={[{ required: true }]} label="Vehicle Type" name="vehicleType">
                <Select onChange={handleVehicle} getPopupContainer={(trigger) => trigger.parentNode}>
                    <Option value="" disabled>
                        -- Select vehicle --
                    </Option>
                    {vehicleRecords.map((item: any) => (
                        <Option key={item.id} value={item.id}>
                            {item.name}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item label="Driver License No" name="drivingLicenseNo" rules={[{ required: true }]}>
                <Input placeholder="Driver License No" />
            </Form.Item>
            <Form.Item label="Plate number" name="plateNumber" rules={[{ required: true }]}>
                <Input placeholder="Plate number" />
            </Form.Item>
            <Form.Item label="Model" name="modelId" rules={[{ required: true }]}>
                <Select getPopupContainer={(trigger) => trigger.parentNode}>
                    <Option value="" disabled>
                        -- Select model --
                    </Option>
                    {modelRecords.map((item: any) => (
                        <Option key={item.id} value={item.id}>
                            {item.name}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item label="Color" name="colorId" rules={[{ required: true }]}>
                <Select getPopupContainer={(trigger) => trigger.parentNode}>
                    <Option value="" disabled>
                        --select color--
                    </Option>
                    {colorRecords?.map((item: any) => (
                        <Option key={item.id} value={item.id}>
                            {item.name}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
        </Form>
    );
};

export default Index;
