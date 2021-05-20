import React from 'react';
import { Form, Modal } from 'antd';
import { Edit } from 'components/ActionIcons';
import FormUI from './FormUI';
import { useEdit } from '../api';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const Index: React.FC<{ dataObj: any; onRefetch: (val?: any) => void }> = ({ dataObj, onRefetch }) => {
    const [form] = Form.useForm();
    const { visible, loading, onShow, onCancel, onFinish } = useEdit({ form, dataObj, onRefetch });

    return (
        <div>
            <Edit onClick={() => onShow()} />
            <Modal
                width={1000}
                title="Edit - Referral"
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

export default Index;
