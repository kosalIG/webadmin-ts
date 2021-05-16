import React from 'react';
import countryCode from 'util/countryCode';
import { Input, Form, Select } from 'antd';
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};
const { Option } = Select;

const EditForm: React.FC<{ form: any; onFinish: (val: any) => void }> = ({ form, onFinish }) => {
    return (
        <div>
            <Form {...layout} onFinish={onFinish} form={form}>
                <Form.Item
                    label="Full name"
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: 'Full name is required',
                        },
                        {
                            pattern: new RegExp('^[a-z0-9A-Z ]*$'),
                            message: 'full name not allow special characters',
                        },
                    ]}
                >
                    <Input placeholder="Full name" />
                </Form.Item>
                <Form.Item
                    label="Coutry Code"
                    name="countryCode"
                    initialValue="855"
                    rules={[
                        {
                            required: true,
                            message: 'country code is required',
                        },
                    ]}
                >
                    <Select getPopupContainer={(trigger) => trigger.parentNode} placeholder="Country code" showSearch>
                        {countryCode.map((item) => (
                            <Option key={Math.random()} value={item.dial_code}>
                                {`+${item.dial_code} (${item.name})`}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Local Number"
                    name="localNumber"
                    rules={[
                        {
                            required: true,
                            message: 'local number is required',
                        },
                    ]}
                >
                    <Input placeholder=" 012 xxx xxx " />
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditForm;
