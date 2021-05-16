import React, { useEffect, useState } from 'react';
import { Form, FormProps, Row, Col, Input, Tooltip, Select, DatePicker, Radio } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import styled from 'styled-components';
import InputNumber from 'components/InputNumber';

const DivFlex = styled.div`
    display: flex;
`;
const { TextArea } = Input;

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

interface FormUI extends FormProps {
    valueType?: string;
    isUpdate?: boolean;
}

const Index: React.FC<FormUI> = ({ form, valueType, onFinish, isUpdate = false }) => {
    const [isValueType, setIsValueType] = useState(false);

    useEffect(() => {
        if (valueType) {
            setIsValueType(valueType === 'PRICE');
            if (valueType === 'PRICE') {
                form?.resetFields(['maxAmount']);
            }
        }
    }, [valueType]);

    const onValueTypeChange = (e: any) => {
        setIsValueType(e === 'PRICE');
        if (e === 'PRICE') {
            form?.resetFields(['maxAmount']);
        }
    };

    const ValueType = (
        <Form.Item name="valueType" noStyle>
            <Select
                onChange={onValueTypeChange}
                getPopupContainer={(trigger) => trigger.parentNode}
                style={{ width: 110, textAlign: 'left' }}
            >
                <Option value="PRICE">PRICE</Option>
                <Option value="PERCENTAGE"> PERCENT</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Form {...layout} form={form} onFinish={onFinish} scrollToFirstError>
            <Row gutter={{ xs: 8 }}>
                <Col md={12} sm={24}>
                    <Form.Item label="Group Name (optional)" name="name">
                        <Input placeholder="Group name" />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                        <Input placeholder="Title" />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item label="Label" name="label" rules={[{ required: true }]}>
                        <Input placeholder="Label" />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item
                        label="Value"
                        name="value"
                        dependencies={['valueType']}
                        rules={[
                            {
                                required: true,
                                type: 'number',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, val) {
                                    const err = "'Value' cannot be greater than 100";
                                    const type = getFieldValue('valueType');
                                    if (type === 'PERCENTAGE') {
                                        if (val > 100) {
                                            return Promise.reject(err);
                                        }
                                        return Promise.resolve();
                                    }
                                    return Promise.resolve();
                                },
                            }),
                        ]}
                    >
                        <InputNumber placeholder="Value" min={0} addonAfter={ValueType} />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item
                        label={
                            <span>
                                Total Use&nbsp;
                                <Tooltip title="Total use">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                        name="totalUsed"
                        rules={[{ required: true, type: 'number' }]}
                    >
                        <InputNumber min={0} placeholder="Total Use" />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item
                        required={false}
                        label={
                            <span>
                                Total Use/User&nbsp;
                                <Tooltip
                                    title={
                                        <div>
                                            <div>- Total Use/User</div>
                                            <div>- Empty or 0 = unlimited</div>
                                        </div>
                                    }
                                >
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                        name="totalUsedPerUser"
                        rules={[{ type: 'number' }]}
                    >
                        <InputNumber min={0} placeholder="Total Use/User" />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item
                        label={
                            <span>
                                Max Amount/Users&nbsp;
                                <Tooltip
                                    title={
                                        <div>
                                            <div>- Max Amount applied per User</div>
                                            <div>- Empty or 0 = unlimited</div>
                                        </div>
                                    }
                                >
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                        name="maxAmount"
                        rules={[{ type: 'number' }]}
                    >
                        <InputNumber min={0} placeholder="Max Amount/Users" disabled={isValueType} />
                    </Form.Item>
                </Col>

                <Col md={12} sm={24}>
                    <Form.Item
                        label={
                            <span>
                                <span> Total Use/User/Day</span>
                                &nbsp;
                                <Tooltip
                                    title={
                                        <div>
                                            <div>- Number promotion applied perUser perDay</div>
                                            <div>- Empty or 0 = unlimited</div>
                                        </div>
                                    }
                                >
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                        name="totalUsedPerUserPerDay"
                        rules={[{ type: 'number' }]}
                    >
                        <InputNumber min={0} placeholder="Total Use/User/Day" />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item
                        label={
                            <span>
                                Amount/Use&nbsp;
                                <Tooltip title="Max amount applied per trip">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                        name="amountPerUsed"
                        rules={[{ type: 'number' }]}
                    >
                        <InputNumber min={0} placeholder="Amount/Use" />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item
                        required={false}
                        label={
                            <span>
                                <span> Expired days</span>
                                &nbsp;
                                <Tooltip
                                    title={
                                        <div>
                                            <div>- Expired days</div>
                                            <div>- Empty or 0 = unlimited</div>
                                        </div>
                                    }
                                >
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                        name="expiredDays"
                        rules={[{ type: 'number' }]}
                    >
                        <InputNumber min={0} disabled={isUpdate} placeholder="Expired days" />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item
                        label={
                            <span>
                                <span> Data Time</span>
                                &nbsp;
                                <Tooltip title="Effective duration of promotion">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                    >
                        <DivFlex>
                            <Form.Item name="startedAt" rules={[{ required: true }]}>
                                <DatePicker showTime style={{ marginRight: 10 }} />
                            </Form.Item>
                            <Form.Item
                                name="endedAt"
                                dependencies={['startedAt']}
                                rules={[
                                    { required: true },
                                    ({ getFieldValue }) => ({
                                        validator(_, val) {
                                            if (!getFieldValue('startedAt')) return Promise.reject();
                                            if (!val) return Promise.reject();

                                            const start = getFieldValue('startedAt').format('YYYY-MM-DD HH:mm:ss');

                                            const end = val.format('YYYY-MM-DD HH:mm:ss');
                                            const err = 'Ended At must bigger than Started At';

                                            if (moment(start).isAfter(end, 'seconds')) {
                                                return Promise.reject(err);
                                            }

                                            if (moment(start).isSame(end, 'seconds')) {
                                                return Promise.reject(err);
                                            }

                                            return Promise.resolve();
                                        },
                                    }),
                                ]}
                            >
                                <DatePicker showTime />
                            </Form.Item>
                        </DivFlex>
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item
                        label={
                            <span>
                                <span> User Type</span>
                                &nbsp;
                                <Tooltip
                                    title={
                                        <div>
                                            <div>1. New user is a user who registered but has no trip.</div>
                                            <div>2. Old user is user that registered and has at lease one trip.</div>
                                        </div>
                                    }
                                >
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                        name="userType"
                        rules={[{ required: true }]}
                    >
                        <Radio.Group>
                            <Radio value="NEW">New User</Radio>
                            <Radio value="OLD">Old User</Radio>
                            <Radio value="ALL">All</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item label="Terms" name="terms" rules={[{ required: true }]}>
                        <TextArea placeholder="User Term" rows={3} />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item label="Description" name="description" rules={[{ required: true }]}>
                        <TextArea placeholder="Description" rows={3} />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item label="SMS (optional)" name="sms">
                        <TextArea placeholder="SMS" rows={3} />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item label="Status" name="status">
                        <Select getPopupContainer={(trig) => trig.parentElement}>
                            <Option value="" disabled>
                                -- Select status --
                            </Option>
                            <Option value="ACTIVE">Active </Option>
                            <Option value="INACTIVE">Inactive</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default Index;
