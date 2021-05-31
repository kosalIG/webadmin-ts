import React from 'react';
import { Modal, Form, Select, Input, ModalProps } from 'antd';
import InputNumber from 'components/InputNumber';
const { Option } = Select;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

interface FormUIProps extends ModalProps {
    form: any;
    isEdit?: boolean;
    onFinish: (val: any) => void;
}

const FormUI: React.FC<FormUIProps> = ({ form, title, onFinish, ...props }) => {
    return (
        <Modal title={`${title} - Commission Charge`} {...props}>
            <Form {...layout} form={form} onFinish={onFinish} initialValues={{ type: '' }}>
                <Form.Item label="Type" name="type" rules={[{ required: true }]}>
                    <Select>
                        <Option disabled value="">
                            -- Select type--
                        </Option>
                        <Option value="PERCENTAGE">PERCENTAGE</Option>
                        <Option value="AMOUNT">AMOUNT</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    label="Amount"
                    name="amount"
                    dependencies={['type']}
                    rules={[
                        { required: true, type: 'number' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                const type = getFieldValue('type');
                                const err = 'Type is PERCENTAGE, amount must not bigger than 100';
                                if (type === 'PERCENTAGE') {
                                    if (value > 100) return Promise.reject(err);
                                    return Promise.resolve();
                                }
                                return Promise.resolve();
                            },
                        }),
                    ]}
                >
                    <InputNumber min={1} placeholder="Amount" style={{ width: `100%` }} />
                </Form.Item>
                <Form.Item label="Max Charge/Day" name="maxChargePerDay">
                    <InputNumber placeholder="Max Charge/Day" style={{ width: `100%` }} />
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <Input.TextArea placeholder="Description" rows={3} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default FormUI;
