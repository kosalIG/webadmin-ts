import React from 'react';
import { Modal, Form, Input, ModalProps } from 'antd';
import Upload from '../Upload';

interface VehicleModelFormUIProps extends ModalProps {
    form?: any;
    file?: string | null;
    onFinish?: (data: any) => void;
    onUploadSuccess: (file: any) => void;
}

const VehicleModelFormUI: React.FC<VehicleModelFormUIProps> = ({ form, file, onFinish, onUploadSuccess, ...props }) => {
    return (
        <div>
            <Modal centered width={500} {...props}>
                <Form form={form} onFinish={onFinish}>
                    <Form.Item
                        label="Model Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your Vehicle model!' }]}
                    >
                        <Input placeholder="Model name" />
                    </Form.Item>
                    <Form.Item label="Choose Image">
                        <Upload file={file} onUploadSuccess={onUploadSuccess} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default VehicleModelFormUI;
