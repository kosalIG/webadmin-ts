import React from 'react';
import { Form, Input, Select, Row, Col, DatePicker } from 'antd';
import moment from 'moment';
import countryCode from 'util/countryCode';

const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const messageValidate = 'You must be 18 years or older!';

const Index: React.FC<{ onFinish: (val: any) => void; form: any }> = ({ onFinish, form }) => {
    const Phone = (
        <Form.Item name="countryCode" noStyle>
            <Select style={{ width: 85 }} showSearch disabled getPopupContainer={(trigger) => trigger.parentNode}>
                {countryCode.map((item: any) => (
                    <Option key={Math.random()} value={item.dial_code}>
                        {item.dial_code}
                    </Option>
                ))}
            </Select>
        </Form.Item>
    );
    return (
        <Form onFinish={onFinish} initialValues={{ gender: '', countryCode: '+855' }} form={form} {...layout}>
            <Row gutter={[6, 6]}>
                <Col md={12} sm={24} xs={24}>
                    <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="First Name" />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Last Name"
                        name="lastName"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Last Name" />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24} xs={24}>
                    <Form.Item rules={[{ required: true }]} label="Gender" name="gender">
                        <Select getPopupContainer={(trigger) => trigger.parentNode}>
                            <Option value="" disabled>
                                -- Select gender --
                            </Option>
                            <Option value="Male">Male</Option>
                            <Option value="Female">Female</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Date of birth"
                        name="dob"
                        rules={[
                            {
                                required: true,
                            },
                            {
                                validator(_, value) {
                                    const rec = moment().diff(value, 'years', false);
                                    if (rec >= 18) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(messageValidate);
                                },
                            },
                        ]}
                    >
                        <DatePicker
                            placeholder="Date of birth"
                            style={{ width: `100%` }}
                            getPopupContainer={(trigger: any) => trigger.parentNode}
                        />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24} xs={24}>
                    <Form.Item
                        label="Mobile"
                        name="localNumber"
                        rules={[
                            {
                                pattern: new RegExp('^[0-9]*$'),
                                message: 'Please input only number!',
                            },
                        ]}
                    >
                        <Input disabled placeholder="Ex: 92 xxx xxx" addonBefore={Phone} />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24} xs={24}>
                    <Form.Item label="ID Card Type" name="idCardType">
                        <Input placeholder="ID Card Type" />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24} xs={24}>
                    <Form.Item label="Id Card No" name="idCardNo">
                        <Input placeholder="Id Card No" />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24} xs={24}>
                    <Form.Item label="Bank Account" name="bankAccount">
                        <Input placeholder="Bank Account" />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default Index;
