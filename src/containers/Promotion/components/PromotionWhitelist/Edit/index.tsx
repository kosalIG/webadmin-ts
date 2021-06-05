import React from 'react';
import { Modal, Form } from 'antd';
import { Edit } from 'components/ActionIcons';
import { useEditPromotionWhitelist } from '../usePromotionWhitelist';
import EditForm from './EditForm';

const Index: React.FC<{ obj: any; onRefetch: (val?: any) => void }> = ({ obj, onRefetch }) => {
    const [form] = Form.useForm();

    const { visible, loading, onCancel, onShowModal, onFinish } = useEditPromotionWhitelist({
        id: obj?.id,
        form,
        obj,
        onRefetch,
    });

    return (
        <div>
            <Edit navkey="WEB:PROMOTION:UPDATE" onClick={onShowModal} />
            <Modal
                confirmLoading={loading}
                visible={visible}
                title="Edit - Whitelist"
                width={500}
                centered
                onCancel={onCancel}
                onOk={() => form.submit()}
            >
                <EditForm onFinish={onFinish} form={form} />
            </Modal>
        </div>
    );
};

export default Index;
