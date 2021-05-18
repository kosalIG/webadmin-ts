import React from 'react';
import { Table } from 'antd';
import { GiftOutlined } from '@ant-design/icons';
import { useCouponColumn } from './useCouponColumn';

const Index: React.FC<{ records: any[]; onRefetch: (val?: any) => void }> = ({ records, onRefetch }) => {
    const { columns } = useCouponColumn({ onRefetch });
    return (
        <div style={{ padding: 10 }}>
            <div style={{ color: '#1890ff' }}>
                <GiftOutlined />
                <span> COUPON</span>
            </div>
            <Table
                size="small"
                pagination={{
                    size: 'default',
                    hideOnSinglePage: true,
                    showSizeChanger: true,
                }}
                bordered
                loading={false}
                columns={columns}
                dataSource={records.map((pro: any, idx: number) => ({
                    ...pro,
                    key: idx + 1,
                }))}
            />
        </div>
    );
};

export default Index;
