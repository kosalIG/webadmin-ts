import React from 'react';
import { Modal, Form, Input, Select } from 'antd';
import Number from 'components/InputNumber';
import { FormUIProps } from '../interface';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

const FormUI: React.FC<FormUIProps> = ({ form, title, loading, isEdit, onFinish, ...props }) => {
    return (
        <div>
            <Modal confirmLoading={loading} width={500} title={`${title} - Currency`} {...props}>
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
                            <Select.Option value="UP">Up</Select.Option>
                            <Select.Option value="DOWN">Down</Select.Option>
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
