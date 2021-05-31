import React from 'react';
import { Card, Table } from 'antd';
import useColumn from './useColumn';
import { useGetReferral } from './api';

const Index: React.FC = () => {
    const { records, loading, refetch } = useGetReferral();
    const { columns } = useColumn({ refetch });
    return (
        <Card title="Setting - Referral">
            <Table
                bordered
                size="middle"
                loading={loading}
                pagination={false}
                dataSource={records?.map((items: any, idx) => ({ ...items, key: idx + 1 }))}
                columns={columns}
            />
        </Card>
    );
};

export default Index;
