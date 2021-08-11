import React from 'react';
import { Card, Table } from 'antd';
import useColumn from './useColumn';
import { useGetReferral } from './api';
import Breadcrumbs from 'components/Breadcrumbs';

const Index: React.FC = () => {
    const { records, loading, refetch } = useGetReferral();
    const { columns } = useColumn({ refetch });
    return (
        <Card title="Setting - Referral">
            <Breadcrumbs propRoutes={['WEB:REFERRAL_SETTING:READ']} />

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
