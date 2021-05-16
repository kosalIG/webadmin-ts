import React from 'react';
import { Button, Modal } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';
import TableWhitelist from 'util/TableWhitelist';
import ReadExcel from 'util/ReadExcel';
import { useAddPromotionWhitelist } from '../usePromotionWhitelist';

const Index: React.FC<{ id: number; onRefetch: (val: any) => void }> = ({ id, onRefetch }) => {
    const {
        visible,
        whitelist,
        loading,
        onOk,
        onCancel,
        setWhitelist,
        addWhitelist,
        onShowModal,
    } = useAddPromotionWhitelist(id, onRefetch);
    return (
        <div>
            <Button onClick={onShowModal} size="small" type="primary" icon={<UsergroupAddOutlined />} />
            <Modal
                confirmLoading={loading}
                onOk={onOk}
                onCancel={onCancel}
                visible={visible}
                title="Add New - Whitelist"
                width={800}
                centered
            >
                <div style={{ display: 'flex', marginBottom: 10 }}>
                    <Button type="primary" onClick={addWhitelist}>
                        Add New
                    </Button>
                    <ReadExcel onFinish={(e: any[]) => setWhitelist(e)} />
                </div>
                <TableWhitelist whitelistRecords={whitelist} setwhitelistRecords={(e) => setWhitelist(e)} />
            </Modal>
        </div>
    );
};

export default Index;
