import React from 'react';
import { Form, Modal } from 'antd';
import { AddNew } from 'components/ActionIcons';
import FormUI from './FormUI';
import { useAddNew } from '../api';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const Index: React.FC<{ onRefetch: (val: any) => void }> = ({ onRefetch }) => {
    const [form] = Form.useForm();
    const { visible, loading, onShow, onCancel, onFinish } = useAddNew({ form, onRefetch });

    return (
        <div>
            <AddNew navkey="WEB:REFERRAL_PROMOTION:CREATE" onClick={onShow} type="primary">
                Add new
            </AddNew>
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

export default Index;
