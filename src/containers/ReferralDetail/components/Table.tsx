import React from 'react';
import { Table, Typography } from 'antd';
import { GiftOutlined } from '@ant-design/icons';
const { Text } = Typography;

interface TableProps {
    title?: string;
    titleValue?: string | any;
    column?: any[];
    records?: any[];
    loading?: boolean;
}
const Index: React.FC<TableProps> = ({ column, records, loading, title, titleValue }) => {
    return (
        <div>
            <Text type="secondary">{title}</Text>
            <div style={{ display: 'flex' }}>
                <div>
                    <GiftOutlined style={{ fontSize: 20, marginTop: 2, color: '#52c41a' }} />
                </div>
                <div style={{ marginLeft: 5, fontSize: 20, color: '#52c41a' }}>{titleValue}</div>
            </div>
            <Table loading={loading} bordered size="middle" pagination={false} columns={column} dataSource={records} />
        </div>
    );
};

export default Index;
