import React from 'react';
import { Table, Card } from 'antd';
import Pagination from 'components/Pagination';
import { useColumn } from './useColumn';
import { useGetGroup } from './api';
import AddNew from './components/AddNew';

const Index: React.FC = () => {
    const { data, loading, getGroup, setQstring } = useGetGroup();
    const { columns } = useColumn({ getGroup });
    const { data: records, metadata } = data || {};

    return (
        <div>
            <Card title="Driver Group" type="inner">
                <AddNew onSuccess={getGroup} />
                <Table
                    size="middle"
                    pagination={false}
                    bordered
                    rowKey={(item: any) => item.id}
                    dataSource={records?.map((item: any, idx) => ({ ...item, idx: idx + 1 })) || []}
                    loading={loading}
                    columns={columns}
                />
                <Pagination metadata={metadata} onPagin={(offset, limit) => setQstring({ offset, limit })} />
            </Card>
        </div>
    );
};

export default Index;
