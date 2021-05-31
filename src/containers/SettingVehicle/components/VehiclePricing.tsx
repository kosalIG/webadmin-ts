import React from 'react';
import { Divider, Form, Button, Select } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Number from 'components/InputNumber';
import { useGetCurrency } from '../api';

const { List } = Form;
const { Option } = Select;
const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
};

const Index: React.FC = () => {
    const { loading, currencyRecords } = useGetCurrency();
    if (loading) return <div>loading...</div>;
    return (
        <>
            <Divider orientation="left">Pricing (optional)</Divider>
            <List name="itemPrices">
                {(fields, { add, remove }) => (
                    <>
                        <div
                            style={{
                                overflowX: 'scroll',
                                maxHeight: 300,
                                overflowY: 'auto',
                            }}
                        >
                            <table
                                style={{
                                    width: 1200,
                                }}
                                className="ant-table"
                            >
                                <thead className="ant-table-thead">
                                    <tr>
                                        <th className="ant-table-cell">#</th>
                                        <th className="ant-table-cell">Currency code</th>
                                        <th className="ant-table-cell">Minimum Fare</th>
                                        <th className="ant-table-cell">Cost/Minute</th>
                                        <th className="ant-table-cell">Cost/Km</th>
                                        <th className="ant-table-cell">Cost</th>
                                        <th className="ant-table-cell">Action</th>
                                    </tr>
                                </thead>
                                {fields.map((field, idx) => (
                                    <tbody className="ant-table-tbody" key={field.key}>
                                        <tr style={{ padding: 0 }} className="ant-table-row ant-table-row-level-0">
                                            <td>{idx + 1}</td>
                                            <td style={{ paddingBottom: 0 }} className="ant-table-cell">
                                                <Form.Item
                                                    {...layout}
                                                    {...field}
                                                    name={[field.name, 'currencyCode']}
                                                    fieldKey={[field.fieldKey, 'currencyCode']}
                                                    initialValue=""
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'country code is required',
                                                        },
                                                    ]}
                                                >
                                                    <Select
                                                        getPopupContainer={(trigger) => trigger.parentNode}
                                                        placeholder="Country code"
                                                        showSearch
                                                        listHeight={120}
                                                    >
                                                        <Option value="" disabled>
                                                            Select Currency
                                                        </Option>
                                                        {currencyRecords?.map((item: any) => (
                                                            <Option key={item.id} value={item.code}>
                                                                {item.code}
                                                            </Option>
                                                        ))}
                                                    </Select>
                                                </Form.Item>
                                            </td>
                                            <td style={{ paddingBottom: 0 }} className="ant-table-cell">
                                                <Form.Item
                                                    {...layout}
                                                    {...field}
                                                    name={[field.name, 'minimumFare']}
                                                    fieldKey={[field.fieldKey, 'minimumFare']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Minimum Fare is required',
                                                            type: 'number',
                                                        },
                                                    ]}
                                                >
                                                    <Number placeholder="Minimum Fare" />
                                                </Form.Item>
                                            </td>
                                            <td style={{ paddingBottom: 0 }} className="ant-table-cell">
                                                <Form.Item
                                                    {...layout}
                                                    {...field}
                                                    name={[field.name, 'costPerMinute']}
                                                    fieldKey={[field.fieldKey, 'costPerMinute']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Cost/Minute is required',
                                                            type: 'number',
                                                        },
                                                    ]}
                                                >
                                                    <Number placeholder="Cost/Minute" />
                                                </Form.Item>
                                            </td>
                                            <td style={{ paddingBottom: 0 }} className="ant-table-cell">
                                                <Form.Item
                                                    {...layout}
                                                    {...field}
                                                    name={[field.name, 'costPerKm']}
                                                    fieldKey={[field.fieldKey, 'costPerKm']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Cost/Km is required',
                                                            type: 'number',
                                                        },
                                                    ]}
                                                >
                                                    <Number placeholder="Cost/Km" />
                                                </Form.Item>
                                            </td>
                                            <td style={{ paddingBottom: 0 }} className="ant-table-cell">
                                                <Form.Item
                                                    {...layout}
                                                    {...field}
                                                    name={[field.name, 'cost']}
                                                    fieldKey={[field.fieldKey, 'cost']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Cost is required',
                                                            type: 'number',
                                                        },
                                                    ]}
                                                >
                                                    <Number placeholder="Cost" />
                                                </Form.Item>
                                            </td>
                                            <td style={{ paddingBottom: 20 }} className="ant-table-cell">
                                                <DeleteOutlined
                                                    style={{ color: '#ff4d4f' }}
                                                    onClick={() => remove(field.name)}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                        <Button type="dashed" style={{ width: `100%`, marginTop: 10 }} onClick={() => add()}>
                            Add New
                        </Button>
                    </>
                )}
            </List>
        </>
    );
};

export default Index;
