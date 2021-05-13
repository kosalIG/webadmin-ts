import React from 'react';
import { Card, Table } from 'antd';

import Pagination from 'components/Pagination';
import Profile from './components/Profile';
import useColumn from './useColumn';
import { useGetRating } from './api';
const index: React.FC = () => {
    const { dataObj, loading, state, setPagin } = useGetRating();
    const { data, metadata } = dataObj || {};
    const { columns } = useColumn();
    return (
        <Card title="Rating Detail" type="inner">
            <Profile profile={state} />
            <Table
                size="middle"
                bordered
                loading={loading}
                pagination={false}
                columns={columns}
                rowKey={(e: any) => e.id}
                dataSource={data?.map((item: any, idx) => ({ ...item, idx: idx + 1 }))}
            />
            <Pagination metadata={metadata} onPagin={(offset, limit) => setPagin({ offset, limit })} />
        </Card>
    );
};

export default index;
