import React from 'react';
import { Form, Avatar, Input } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import { s3Url } from 'env';
import UploadImage from 'util/useUpload';

const { TextArea } = Input;
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

export interface AddNewFormProps {
    form: any;
    imageFile: any;
    onUploadSuccess: (file: any) => void;
    onFormFinish: (data: any) => void;
}

const AddNewForm: React.FC<AddNewFormProps> = ({ form, imageFile, children, onUploadSuccess, onFormFinish }) => {
    return (
        <div>
            <Form onFinish={onFormFinish} {...layout} form={form}>
                <Form.Item label="Group image">
                    <UploadImage onUploadSuccess={(e) => onUploadSuccess(e)}>
                        <Avatar
                            src={imageFile && s3Url + imageFile}
                            size={100}
                            shape="square"
                            icon={<PictureOutlined />}
                        />
                    </UploadImage>
                </Form.Item>
                <Form.Item
                    label="Group Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="Group Name" />
                </Form.Item>
                {children}
                {/* <SelectUser /> */}
                <Form.Item label="Description" name="description">
                    <TextArea rows={3} placeholder="Description" />
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddNewForm;
