import React, { useState } from 'react';
import { Modal, Form, InputNumber, Input } from 'antd';
import { TopUp } from 'components/ActionIcons';

interface TopupModalFormData {
    walletUId?: string;
    amount: number;
}

interface TopupModalFormProps {
    fullName: string;
    onFormFinish?: (data: TopupModalFormData) => void;
}

const TopupModalForm: React.FC<TopupModalFormProps> = ({ onFormFinish, fullName }) => {
    const [visible, setvisible] = useState(false);
    const [form] = Form.useForm();

    function onCancel() {
        setvisible(false);
        form.resetFields();
    }

    function onSubmit() {
        form.submit();
    }

    function onFinish(val: TopupModalFormData) {
        if (onFormFinish) {
            onFormFinish(val);
        }
        onCancel();
    }

    return (
        <div>
            <TopUp onClick={() => setvisible(true)} navkey="WEB:DRIVER:READ_DETAIL" />
            <Modal width={400} title="TOP UP" visible={visible} onCancel={onCancel} onOk={onSubmit}>
                <Form onFinish={onFinish} form={form}>
                    <Form.Item label="Full name">{fullName || ''}</Form.Item>
                    <Form.Item label="Wallet ID" name="walletUId" extra="Wallet ID must be 9 digit">
                        <Input placeholder="Wallet ID" />
                    </Form.Item>
                    <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
                        <InputNumber style={{ width: '100%' }} placeholder="Amount" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default TopupModalForm;
