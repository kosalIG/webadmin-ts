import React from 'react';
import { Modal, Form, Divider } from 'antd';
import { useEdit } from './useEdit';
import FormUi from '../FormUI';
import { Metadata } from '../../interface';
import TableWhitelist from './Whitelist';
import { Edit } from 'components/ActionIcons';

const Index: React.FC<{ onRefetch: (meta?: Metadata) => void; dataObj?: any }> = ({ onRefetch, dataObj }) => {
    const [form] = Form.useForm();
    const { visible, loading, onShowModal, onCancel, onFinish, onOk, editWhitelist, handleWhitelist } = useEdit({
        form,
        dataObj,
        onRefetch,
    });

    return (
        <div>
            <Edit navkey="WEB:PROMOTION:UPDATE" onClick={() => onShowModal()} />
            <Modal
                title="Edit Promotion"
                visible={visible}
                onCancel={onCancel}
                width={1000}
                maskClosable={false}
                onOk={onOk}
                confirmLoading={loading}
            >
                <FormUi form={form} onFinish={onFinish} valueType={dataObj?.valueType} isUpdate />
                <div>
                    <Divider orientation="left">Whitelist (optional)</Divider>
                </div>
                <TableWhitelist
                    editWhitelist={editWhitelist}
                    handleWhitelist={(e) => handleWhitelist(e)}
                    id={dataObj?.id}
                />
            </Modal>
        </div>
    );
};

export default Index;
