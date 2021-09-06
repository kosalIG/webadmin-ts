import React from 'react';
import { Modal, Form, Select, Input, ModalProps } from 'antd';
import Upload from 'util/UploadImage';

const { Option } = Select;
const { TextArea } = Input;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

interface FormUIProps extends ModalProps {
    form: any;
    imgFile: string | null;
    paymentEnum: string[];
    onFinish?: (data: any) => void;
    onUploadSuccess: (file: string) => void;
}

const FormUI: React.FC<FormUIProps> = ({ form, paymentEnum, title, imgFile, onFinish, onUploadSuccess, ...props }) => {
    return (
        <Modal width={500} title={`${title} - Payment Method`} {...props}>
            <Form onFinish={onFinish} form={form} initialValues={{ status: '', type: '' }} {...layout}>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'The Name is reqired',
                        },
                        {
                            pattern: new RegExp('^[a-z0-9A-Z ]*$'),
                            message: 'The Name is not valid',
                        },
                    ]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    label="Type"
                    name="type"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select getPopupContainer={(tri) => tri.parentElement}>
                        <Option disabled value="">
                            -- Select Type --
                        </Option>
                        {paymentEnum?.map((item) => (
                            <Option key={item} value={item}>
                                {item}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Status"
                    name="status"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select getPopupContainer={(tri) => tri.parentElement}>
                        <Option disabled value="">
                            -- Select status --
                        </Option>
                        <Option value="ACTIVE">ACTIVE</Option>
                        <Option value="INACTIVE">INACTIVE</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <TextArea placeholder="Description" />
                </Form.Item>
                <Form.Item label="Icon" required>
                    <Upload file={imgFile || null} onUploadSuccess={(imgFile: string) => onUploadSuccess(imgFile)} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default FormUI;
