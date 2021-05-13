import React from 'react';
import { Card, Table } from 'antd';
import Pagination from 'components/Pagination';
import useColumn from './useColumn';
import { useGetRating } from './api';
const Index: React.FC = () => {
    const { dataObj, loading, setPagin } = useGetRating();

    const { columns } = useColumn();
    const { data: records, metadata } = dataObj || {};

    return (
        <Card title="Rating" type="inner">
            <Table
                loading={loading}
                size="middle"
                bordered
                pagination={false}
                rowKey={(e: any) => e.driverID}
                dataSource={records?.map((item: any, idx: number) => ({ ...item, idx: idx + 1 }))}
                columns={columns}
            />
            <Pagination metadata={metadata} onPagin={(offset, limit) => setPagin({ offset, limit })} />
        </Card>
    );
};

export default Index;
