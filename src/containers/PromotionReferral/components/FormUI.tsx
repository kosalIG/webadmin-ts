import React from 'react';
import { Row, Col, Form, Input, Select, Radio } from 'antd';
import Number from 'components/InputNumber';

const { TextArea } = Input;
const { Option } = Select;

const FormUI: React.FC = () => {
    return (
        <Row>
            <Col xl={12} lg={12} md={12} xs={12}>
                <Form.Item label="Group Name" name="name">
                    <Input placeholder="Group Name" />
                </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12}>
                <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                    <Input placeholder="Title" />
                </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12}>
                <Form.Item label="Label" name="label" rules={[{ required: true }]}>
                    <Input placeholder="Label" />
                </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12}>
                <Form.Item label="Max Amount/Users" name="maxAmount" rules={[{ type: 'number' }]}>
                    <Number min={0} placeholder="Max Amount/Users" />
                </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12}>
                <Form.Item
                    label="Total Use/User/Day"
                    name="totalUsedPerUserPerDay"
                    rules={[{ type: 'number', required: true }]}
                >
                    <Number min={0} placeholder="Total Use/User/Day" />
                </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12}>
                <Form.Item label="Amount/Use" name="amountPerUsed" rules={[{ type: 'number', required: true }]}>
                    <Number min={0} placeholder="Amount/Use" />
                </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12}>
                <Form.Item label="User Type" name="userType">
                    <Radio.Group disabled>
                        <Radio value="NEW">New User</Radio>
                        <Radio value="OLD">Old User</Radio>
                        <Radio value="ALL">All</Radio>
                    </Radio.Group>
                </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12}>
                <Form.Item label="Status" name="status">
                    <Select getPopupContainer={(triggerNode) => triggerNode.parentElement}>
                        <Option value="" disabled>
                            -- Select status --
                        </Option>
                        <Option value="ACTIVE">Active </Option>
                        <Option value="INACTIVE">Inactive</Option>
                    </Select>
                </Form.Item>
            </Col>
            {/* TEXT AREA SECTION ======================================= */}

            <Col xl={12} lg={12} md={12} xs={12}>
                <Form.Item label="Terms" name="terms" rules={[{ required: true }]}>
                    <TextArea placeholder="Terms" rows={3} />
                </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12}>
                <Form.Item label="Description" name="description" rules={[{ required: true }]}>
                    <TextArea placeholder="Description" rows={3} />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default FormUI;
