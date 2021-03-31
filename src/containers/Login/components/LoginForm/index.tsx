import React from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { LoginUIProps } from '../../interface';
import { WrapCard, CardLogo } from '../../style';

const Index: React.FC<LoginUIProps> = ({ onFinish }) => {
    return (
        <WrapCard>
            <Row>
                <Col xs={24} md={24} lg={24}>
                    <CardLogo>QWIQ</CardLogo>
                </Col>
                <Col xs={24} md={24} lg={24}>
                    <Form onFinish={onFinish} name="normal_login" initialValues={{ remember: true }}>
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: 'Please input your Username!' },
                                { type: 'email', message: 'Username is not a valid' },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined style={{ color: `rgba(0, 0, 0, 0.25)` }} />}
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                            <Input
                                prefix={<LockOutlined style={{ color: `rgba(0, 0, 0, 0.25)` }} />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </WrapCard>
    );
};

export default Index;
