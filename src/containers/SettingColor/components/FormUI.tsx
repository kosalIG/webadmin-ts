import React from 'react';
import { Modal, Form, Input, Select, ModalProps } from 'antd';
import Number from 'components/InputNumber';

const { Option } = Select;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

interface FormUIProps extends ModalProps {
    isEdit?: boolean;
    form: any;
    onFinish: (value: any) => void;
}

const FormUI: React.FC<FormUIProps> = ({ form, isEdit, title, onFinish, ...props }) => {
    return (
        <div>
            <Modal title={`${title} - Color`} {...props}>
                <Form onFinish={onFinish} form={form} {...layout} scrollToFirstError>
                    <Form.Item
                        label="Order no"
                        name="orderNo"
                        rules={[
                            {
                                required: true,
                                type: 'number',
                            },
                        ]}
                    >
                        <Number placeholder="Order no" />
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
                        <Input placeholder="Color name" />
                    </Form.Item>
                    <Form.Item
                        label="Color code"
                        name="colorCode"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Color Code EX: #ffff or Color name" />
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
                            <Select getPopupContainer={(trigger) => trigger.parentNode}>
                                <Option disabled value="">
                                    Select status
                                </Option>
                                <Option value="ACTIVE">ACTIVE</Option>
                                <Option value="INACTIVE">INACTIVE</Option>
                            </Select>
                        </Form.Item>
                    )}
                    <Form.Item label="Description" name="description">
                        <Input.TextArea rows={3} placeholder="Content..." />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default FormUI;
