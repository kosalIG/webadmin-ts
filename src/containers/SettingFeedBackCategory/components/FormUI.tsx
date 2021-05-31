import React from 'react';
import { Modal, Form, Input, ModalProps } from 'antd';
import Upload from 'util/UploadImage';
import Number from 'components/InputNumber';

const { TextArea } = Input;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

interface FormUIProps extends ModalProps {
    form: any;
    imgFile: string | null;
    onFinish?: (data: any) => void;
    onUploadSuccess: (file: string) => void;
}

const FormUI: React.FC<FormUIProps> = ({ form, title, imgFile, onFinish, onUploadSuccess, ...props }) => {
    return (
        <Modal width={500} title={`${title} - Feedback Category`} {...props}>
            <Form onFinish={onFinish} form={form} {...layout}>
                <Form.Item
                    label="Order Number"
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
                    <Number placeholder="Order Number" />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item label="Image" required>
                    <Upload file={imgFile || null} onUploadSuccess={(imgFile: string) => onUploadSuccess(imgFile)} />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <TextArea placeholder="Description" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default FormUI;
