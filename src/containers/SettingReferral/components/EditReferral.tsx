import React from 'react';
import { Form } from 'antd';
import { Edit } from 'components/ActionIcons';
import { useModal } from './useEditReferral';
import FormUI from './FormUI';
import { useGetActivePromotion, useEdit } from '../api';

interface EditReferralProps {
    dataObj: any;
    refetch: () => void;
}

const EditReferral: React.FC<EditReferralProps> = ({ refetch, dataObj }) => {
    const [form] = Form.useForm();
    const { visible, onCancel, onOk, onShowModal } = useModal({ form, dataObj });
    const { records } = useGetActivePromotion();
    const { loading, onEdit } = useEdit({ callback });

    function callback() {
        onCancel();
        refetch();
    }

    return (
        <div>
            <Edit onClick={onShowModal} />
            <FormUI
                title="Edit"
                form={form}
                visible={visible}
                confirmLoading={loading}
                records={records}
                referenceType={dataObj?.referenceType}
                onCancel={onCancel}
                onOk={onOk}
                onFinish={(data: any) => onEdit({ ...data, id: dataObj?.id })}
            />
        </div>
    );
};

export default EditReferral;
