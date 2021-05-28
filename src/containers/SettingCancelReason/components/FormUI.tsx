import React from 'react';
import { Modal, Form, Row, Col, Select, Input, ModalProps } from 'antd';
import Number from 'components/InputNumber';
const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 17 },
};

interface FormUIProps extends ModalProps {
    form: any;
    isEdit?: boolean;
    onFinish: (val: any) => void;
}

const FormUI: React.FC<FormUIProps> = ({ form, title, isEdit, onFinish, ...props }) => {
    return (
        <Modal width={500} title={`${title} - Cancel Reason`} {...props}>
            <Form {...layout} form={form} onFinish={onFinish} initialValues={{ type: '' }}>
                <Row>
                    <Col md={24} sm={24}>
                        <Form.Item {...tailLayout} label="Type" name="type" rules={[{ required: true }]}>
                            <Select getPopupContainer={(trigger) => trigger.parentNode} style={{ width: 234 }}>
                                <Option disabled value="">
                                    Choose Vehicle Type
                                </Option>
                                <Option value="RIDER_TYPE">Rider</Option>
                                <Option value="DRIVER_TYPE">Driver</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col md={24} sm={24}>
                        <Form.Item
                            {...tailLayout}
                            label="Ordering"
                            name="ordering"
                            rules={[
                                {
                                    required: true,
                                },
                                {
                                    type: 'number',
                                },
                            ]}
                        >
                            <Number placeholder="Ordering" />
                        </Form.Item>
                    </Col>
                    <Col md={24} sm={24}>
                        <Form.Item
                            {...tailLayout}
                            label="Description"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your description!',
                                },
                            ]}
                        >
                            <Input.TextArea />
                        </Form.Item>
                    </Col>
                    {isEdit && (
                        <Col md={24} sm={24}>
                            <Form.Item {...tailLayout} label="Status" name="status" rules={[{ required: true }]}>
                                <Select getPopupContainer={(trigger) => trigger.parentNode} style={{ width: 234 }}>
                                    <Option disabled value="">
                                        Choose status
                                    </Option>
                                    <Option value="ACTIVE">Active</Option>
                                    <Option value="INACTIVE">Inactive</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    )}
                </Row>
            </Form>
        </Modal>
    );
};

export default FormUI;
