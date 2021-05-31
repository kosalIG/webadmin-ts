import React from 'react';
import { Modal, Form, Select, Input, ModalProps } from 'antd';
import Number from 'components/InputNumber';
const { Option } = Select;

const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 24 },
};

interface FormUIProps extends ModalProps {
    form: any;
    isEdit?: boolean;
    onFinish: (val: any) => void;
}

const FormUI: React.FC<FormUIProps> = ({ form, title, onFinish, ...props }) => {
    return (
        <Modal width={500} title={`${title} - Store Control`} {...props}>
            <Form
                {...layout}
                form={form}
                onFinish={(data: any) => onFinish({ ...data, isForceUpdate: Boolean(data.isForceUpdate) })}
                initialValues={{ isForceUpdate: '', appType: '', deviceType: '' }}
            >
                <Form.Item rules={[{ required: true }]} label="Force Update" name="isForceUpdate">
                    <Select getPopupContainer={(trigger) => trigger.parentNode}>
                        <Option value="" disabled>
                            -- Select force update --
                        </Option>
                        <Option value={1}>True</Option>
                        <Option value={0}>False</Option>
                    </Select>
                </Form.Item>
                <Form.Item rules={[{ required: true }]} label="App type" name="appType">
                    <Select getPopupContainer={(trigger) => trigger.parentNode}>
                        <Option value="" disabled>
                            -- Select app user type --
                        </Option>
                        <Option value="RIDER">Rider</Option>
                        <Option value="DRIVER">Driver</Option>
                    </Select>
                </Form.Item>

                <Form.Item rules={[{ required: true }]} label="Device OS" name="deviceType">
                    <Select getPopupContainer={(trigger) => trigger.parentNode}>
                        <Option value="" disabled>
                            -- Select device OS --
                        </Option>
                        <Option value="IOS">iOS</Option>
                        <Option value="ANDROID">Android</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Store Version"
                    name="storeVersion"
                    rules={[
                        {
                            required: true,
                        },
                        {
                            type: 'number',
                        },
                    ]}
                >
                    <Number placeholder="Store Control" />
                </Form.Item>
                <Form.Item label="Store Version Name" name="storeVersionName" rules={[{ required: true }]}>
                    <Input.TextArea placeholder="Store Version Name" />
                </Form.Item>
                <Form.Item label="Store Url" name="storeURL" rules={[{ required: true }]}>
                    <Input.TextArea placeholder="Store url" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default FormUI;
