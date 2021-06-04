import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Radio } from 'antd';
import { useHistory } from 'react-router-dom';

import { useGetOrderReasonList, useCancelTrip } from '../api';

interface CancelTrip {
    driverId: string;
    userId: string;
    orderId: string;
}
const CancelTrip: React.FC<{ cancelTripParams: CancelTrip }> = ({ cancelTripParams }) => {
    const [form] = Form.useForm();
    const { goBack } = useHistory();
    const [visible, setVisible] = useState(false);
    const { results } = useGetOrderReasonList();
    const { cancelTripBySystem, data, loading } = useCancelTrip();

    useEffect(() => {
        if (data) {
            onCancel();
            goBack();
        }
    }, [data]);

    function onCancel() {
        setVisible(false);
        form.resetFields();
    }

    function onFinish(data: any) {
        cancelTripBySystem({
            variables: {
                input: {
                    ...data,
                    ...cancelTripParams,
                },
            },
        });
    }

    return (
        <div>
            <Button onClick={() => setVisible(true)} size="middle" type="primary" ghost>
                Cancel Trip
            </Button>
            <Modal
                confirmLoading={loading}
                onOk={() => form.submit()}
                title="Cancel reason"
                visible={visible}
                onCancel={onCancel}
            >
                <Form form={form} onFinish={onFinish}>
                    <Form.Item rules={[{ required: true }]} name="reasonId">
                        <Radio.Group>
                            {results?.map((r) => (
                                <Radio style={{ display: 'block' }} value={r.id} key={Math.random()}>
                                    {r.description}
                                </Radio>
                            ))}
                        </Radio.Group>
                    </Form.Item>
                    <div style={{ fontSize: 11 }}>* note: Please choose one before submit</div>
                </Form>
            </Modal>
        </div>
    );
};

export default CancelTrip;
