import React from 'react';
import { Form } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Edit } from 'components/ActionIcons';
import FormUI from './FormUI';
import { useModal, useEdit } from '../api';
import { Metadata } from '../interface';
import moment from 'moment';

interface AddNotificationProps {
    dataObj: any;
    onRefetch: (pagin?: Metadata) => void;
}
const EditNotification: React.FC<AddNotificationProps> = ({ onRefetch, dataObj }) => {
    const [form] = Form.useForm();
    const { loading, onEdit } = useEdit({ callback });
    const { sendDate, ...newObj } = dataObj || {};
    const { visible, onCancel, onOk, onShowModal } = useModal({
        form,
        dataObj: { ...newObj, sendDate: moment(sendDate), description: dataObj?.description?.kh },
    });

    function callback() {
        onRefetch();
        onCancel();
    }

    return (
        <div>
            {dataObj?.sendStatus === 'SENT' ? (
                <EditOutlined style={{ cursor: 'not-allowed' }} />
            ) : (
                <Edit navkey="WEB:NOTIFICATION:UPDATE" onClick={onShowModal} />
            )}
            <FormUI
                form={form}
                title="Edit"
                visible={visible}
                mediaTypeData={dataObj?.mediaType}
                imgFile={dataObj?.mediaURL}
                confirmLoading={loading}
                onCancel={onCancel}
                onFinish={(value: any) => onEdit({ ...value, id: dataObj?.id })}
                onOk={onOk}
            />
        </div>
    );
};

export default EditNotification;
