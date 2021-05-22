import React from 'react';
import { Modal, Form, Input, Select } from 'antd';
import Number from 'components/InputNumber';
import { FormUIProps } from '../interface';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

const FormUI: React.FC<FormUIProps> = ({ form, title, visible, loading, isEdit, onOk, onCancel, onFinish }) => {
    return (
        <div>
            <Modal
                confirmLoading={loading}
                visible={visible}
                onCancel={onCancel}
                onOk={onOk}
                width={500}
                title={`${title} - Currency`}
            >
                <Form
                    onFinish={onFinish}
                    form={form}
                    {...layout}
                    initialValues={{ round: 'DEFAULT' }}
                    scrollToFirstError
                >
                    <Form.Item
                        label="Code"
                        name="code"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Code" />
                    </Form.Item>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        label="Decimal"
                        name="decimal"
                        rules={[
                            {
                                required: true,
                                type: 'number',
                            },
                        ]}
                    >
                        <Number placeholder="Decimal" />
                    </Form.Item>
                    <Form.Item
                        label="Round"
                        name="round"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select style={{ width: 200 }} getPopupContainer={(trigger) => trigger.parentNode}>
                            <Select.Option value="" disabled>
                                Choose round
                            </Select.Option>
                            <Select.Option value="DEFAULT">Default</Select.Option>
                            <Select.Option value="UP">UP</Select.Option>
                            <Select.Option value="DOWN">DOWN</Select.Option>
                        </Select>
                    </Form.Item>
                    {isEdit && (
                        <Form.Item
                            label="Status"
                            name="status"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select style={{ width: 200 }} getPopupContainer={(trigger) => trigger.parentNode}>
                                <Select.Option value="">Select status</Select.Option>
                                <Select.Option value="ACTIVE">ACTIVE</Select.Option>
                                <Select.Option value="INACTIVE">INACTIVE</Select.Option>
                            </Select>
                        </Form.Item>
                    )}
                </Form>
            </Modal>
        </div>
    );
};

export default FormUI;
