import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'antd';
import WithDrawForm from './WithdrawForm';
import { RequestWithDrawProps } from '../../interface';

const WithDraw: React.FC<{ requestWithDraw: RequestWithDrawProps }> = ({ requestWithDraw }) => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const { onWithDraw, withDrawLoading, data } = requestWithDraw;

    useEffect(() => {
        if (data) {
            onCancelModal();
        }
    }, [data]);

    function onShowModal() {
        setVisible(true);
    }

    function onCancelModal() {
        setVisible(false);
        form.resetFields();
    }

    function onFormSubmit() {
        form.submit();
    }
    function onFormFinish(val: any) {
        onWithDraw(val);
    }
    return (
        <div>
            <Button
                onClick={onShowModal}
                style={{
                    backgroundColor: '#52c41a',
                    border: '#52c41a',
                }}
                type="primary"
            >
                Withdraw
            </Button>
            <Modal
                confirmLoading={withDrawLoading}
                title="Request to withdraw"
                centered
                visible={visible}
                onCancel={onCancelModal}
                onOk={onFormSubmit}
            >
                <WithDrawForm onFormFinish={onFormFinish} form={form} />
            </Modal>
        </div>
    );
};

export default WithDraw;
