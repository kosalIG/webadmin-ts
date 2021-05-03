import React, { useState } from 'react';
import { Form, Input, InputNumber, Select } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const { Option } = Select;
type Type = 'CASH' | 'PIPAY';

const WithdrawForm: React.FC<{ form: any; onFormFinish: (val: any) => void }> = ({ onFormFinish, form }) => {
    const [accType, setAccType] = useState<Type>('CASH');
    return (
        <Form form={form} onFinish={onFormFinish} {...layout} initialValues={{ accountType: 'CASH' }}>
            <Form.Item label="Account Type" name="accountType" rules={[{ required: true }]}>
                <Select onChange={(e: Type) => setAccType(e)}>
                    <Option disabled value="">
                        -- Select Type --
                    </Option>
                    <Option value="CASH">Cash</Option>
                    <Option value="PIPAY">PiPay</Option>
                </Select>
            </Form.Item>
            {accType !== 'CASH' && (
                <Form.Item label="Account Id" name="accountId" rules={[{ required: true }]}>
                    <Input placeholder="Account Id" />
                </Form.Item>
            )}
            <Form.Item label="Amount" name="amount" rules={[{ required: true }]}>
                <InputNumber style={{ width: `100%` }} placeholder="Amount" />
            </Form.Item>
        </Form>
    );
};

export default WithdrawForm;
