import React from 'react';
import { Divider, Form, Input, Button, Select } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import countryCode from 'util/countryCode';
const { List } = Form;
const { Option } = Select;
const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
};

const FormList: React.FC<{ isTitle?: boolean }> = ({ isTitle = false }) => (
    <>
        {!isTitle && <Divider orientation="left">Whitelist (optional)</Divider>}
        <List name="promotionWhitelists">
            {(fields, { add, remove }) => (
                <>
                    <div
                        style={{
                            overflow: `auto`,
                            maxHeight: `400px`,
                        }}
                    >
                        <table
                            style={{
                                width: `100%`,
                            }}
                            className="ant-table"
                        >
                            <thead className="ant-table-thead">
                                <tr>
                                    <th className="ant-table-cell">#</th>
                                    <th className="ant-table-cell">Full name</th>
                                    <th className="ant-table-cell">Country Code</th>
                                    <th className="ant-table-cell">Local Number</th>
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
                                                name={[field.name, 'fullName']}
                                                fieldKey={[field.fieldKey, 'fullName']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Full name is required',
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Full name" />
                                            </Form.Item>
                                        </td>
                                        <td style={{ paddingBottom: 0 }} className="ant-table-cell">
                                            <Form.Item
                                                {...layout}
                                                {...field}
                                                name={[field.name, 'countryCode']}
                                                fieldKey={[field.fieldKey, 'countryCode']}
                                                initialValue="855"
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
                                                >
                                                    {countryCode.map((item) => (
                                                        <Option key={Math.random()} value={item.dial_code}>
                                                            {`${item.dial_code} (${item.code})`}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        </td>
                                        <td style={{ paddingBottom: 0 }} className="ant-table-cell">
                                            <Form.Item
                                                {...layout}
                                                {...field}
                                                name={[field.name, 'localNumber']}
                                                fieldKey={[field.fieldKey, 'localNumber']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'local number is required',
                                                    },
                                                ]}
                                            >
                                                <Input placeholder=" 012 xxx xxx " />
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

export default FormList;
