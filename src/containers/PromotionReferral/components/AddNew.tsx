import React from 'react';
import { Form, Modal, Button } from 'antd';
import FormUI from './FormUI';
import { useAddNew } from '../api';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const AddNew: React.FC<{ onRefetch: (val: any) => void }> = ({ onRefetch }) => {
    const [form] = Form.useForm();
    const { visible, loading, onShow, onCancel, onFinish } = useAddNew({ form, onRefetch });

    return (
        <div>
            <div style={{ marginBottom: 10, display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={onShow} type="primary">
                    Add new
                </Button>
            </div>
            <Modal
                width={1000}
                title="Add New - Referral"
                visible={visible}
                onCancel={onCancel}
                onOk={() => form.submit()}
                confirmLoading={loading}
            >
                <Form
                    initialValues={{ maxAmount: 0, status: '', userType: 'ALL' }}
                    onFinish={onFinish}
                    form={form}
                    {...layout}
                >
                    <FormUI />
                </Form>
            </Modal>
        </div>
    );
};

export default AddNew;
