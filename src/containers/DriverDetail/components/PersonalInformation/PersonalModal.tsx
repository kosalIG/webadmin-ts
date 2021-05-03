import React, { useState } from 'react';
import { Button, Modal, Form } from 'antd';
import moment from 'moment';
import { EditOutlined } from '@ant-design/icons';
import { DriverData, UpdateDriver } from '../../interface';

import PersonalForm from './PersonalForm';

const Index: React.FC<{ driverDetail: DriverData | null; updateDriver: UpdateDriver }> = ({
    driverDetail,
    updateDriver,
}) => {
    const [visible, setVible] = useState(false);
    const [form] = Form.useForm();
    const { onUpdateDriver, updateLoading } = updateDriver;

    function onShow() {
        form.resetFields();
        setVible(true);
        form.setFieldsValue({
            firstName: driverDetail?.firstName,
            lastName: driverDetail?.lastName,
            gender: driverDetail?.gender,
            dob: moment(driverDetail?.dob),
            ...driverDetail?.mobileDetail,
            ...driverDetail?.driverInfo,
        });
    }

    function onFinish(val: any) {
        onUpdateDriver(val);
    }
    return (
        <div>
            <Button onClick={onShow} type="primary" style={{ padding: `0 10px` }} size="small">
                <EditOutlined />
                Edit
            </Button>
            <Modal
                title="Update - Personal info"
                width={900}
                onCancel={() => setVible(false)}
                onOk={() => form.submit()}
                visible={visible}
                confirmLoading={updateLoading}
            >
                <PersonalForm form={form} onFinish={onFinish} />
            </Modal>
        </div>
    );
};

export default Index;
