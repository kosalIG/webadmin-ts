import React from 'react';
import { Button, Modal, Form, Divider } from 'antd';
import TableWhitelist from 'util/TableWhitelist';
import ReadExcel from 'util/ReadExcel';
import { Copy } from 'components/ActionIcons';
import { useAddNew } from './useAddNew';
import FormUi from '../FormUI';
import { Metadata } from '../../interface';

const Index: React.FC<{ onRefetch: (meta?: Metadata) => void; dataObj?: any }> = ({ onRefetch, dataObj }) => {
    const [form] = Form.useForm();
    const {
        visible,
        whitelistRecords,
        setwhitelistRecords,
        onShowModal,
        onCancel,
        onFinish,
        onOk,
        onAddNewWhitelist,
        addWhitelistByExcel,
    } = useAddNew({
        form,
        dataObj,
        onRefetch,
    });

    return (
        <div>
            <Copy onClick={() => onShowModal()} />
            <Modal
                title="Add Promotion"
                visible={visible}
                onCancel={onCancel}
                width={1000}
                maskClosable={false}
                onOk={onOk}
            >
                <FormUi form={form} onFinish={onFinish} valueType={dataObj?.valueType} />
                <div>
                    <Divider orientation="left">Whitelist (optional)</Divider>
                    <div style={{ display: 'flex', marginBottom: 10 }}>
                        <Button onClick={onAddNewWhitelist} type="primary">
                            Add New
                        </Button>
                        <ReadExcel onFinish={(e) => addWhitelistByExcel(e)} />
                    </div>
                    <TableWhitelist whitelistRecords={whitelistRecords} setwhitelistRecords={setwhitelistRecords} />
                </div>
            </Modal>
        </div>
    );
};

export default Index;
