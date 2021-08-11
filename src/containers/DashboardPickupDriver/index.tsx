/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Card, Table } from 'antd';
import { useQuery } from '@apollo/client';
import { serviceOrder } from 'env';
import Pagination from 'components/Pagination';
import useColumn from './useColumn';
import { GET_ORDER_TRIP } from './api';
import Breadcrumbs from 'components/Breadcrumbs';

const Index: React.FC = () => {
    const [qString, setqString] = useState({ limit: 10, offset: 0, tripStatus: ['ON_PICKUP'] });
    const { column } = useColumn();

    const { data, loading } = useQuery(GET_ORDER_TRIP, {
        client: serviceOrder,
        variables: { ...qString },
    });
    const { getOrderList } = data || {};
    const { results, metadata } = getOrderList || {};

    return (
        <Card type="inner" title="Pickup Drivers">
            <Breadcrumbs propRoutes={['dashboard']} />
            <Table
                scroll={{ x: 1400 }}
                size="middle"
                bordered
                loading={loading}
                pagination={false}
                columns={column}
                rowKey={(e: any) => e.id}
                dataSource={results?.map((e: any, idx: number) => ({ ...e, idx: idx + 1 }))}
            />
            <Pagination metadata={metadata} onPagin={(offset, limit) => setqString({ ...qString, limit, offset })} />
        </Card>
    );
};

export default Index;
