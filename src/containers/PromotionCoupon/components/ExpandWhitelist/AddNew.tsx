import React from 'react';
import { Tooltip, Button, Modal, Form } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';
import FormList from '../FormList';
import { useAddNew } from './useFunction';
import { useAppConsummer } from 'util/appContext';

const layout = {
    labelCol: { span: 11 },
    wrapperCol: { span: 13 },
};
const AddNew: React.FC<{ id: any; onRefetch: (val?: any) => void }> = ({ id, onRefetch }) => {
    const [form] = Form.useForm();
    const { visible, loading, onCancel, onFinish, onOK, onShowModal } = useAddNew({ form, id, onRefetch });

    const { user } = useAppConsummer();
    const result = user?.permissions.find((p) => p === 'WEB:COUPON:CREATE');

    return (
        <div>
            {result && (
                <Tooltip placement="bottom" title="Add new whitelist">
                    <Button onClick={onShowModal} size="small" type="primary" icon={<UsergroupAddOutlined />} />
                </Tooltip>
            )}

            <Modal
                title="Add New - Whitelist"
                width={800}
                centered
                visible={visible}
                confirmLoading={loading}
                onCancel={onCancel}
                onOk={onOK}
            >
                <Form form={form} name="whitelist" {...layout} onFinish={onFinish}>
                    <FormList isTitle />
                </Form>
            </Modal>
        </div>
    );
};

export default AddNew;
