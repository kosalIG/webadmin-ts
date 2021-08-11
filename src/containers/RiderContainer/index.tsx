/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Card, Table } from 'antd';
import Pagination from 'components/Pagination';
import useSearch from 'util/useSearch';
import useColumn from './useColumn';
import { useGetRider } from './api';
import Breadcrumbs from 'components/Breadcrumbs';

const Index: React.FC = () => {
    const { data, loading, pagination, onSearch, onDelete } = useGetRider();
    const { data: records, metadata } = data || {};

    const { handleSearch } = useSearch((val) => onSearch(val));

    const { columns } = useColumn(handleSearch, onDelete);

    return (
        <Card title="Rider" type="inner">
            <Breadcrumbs propRoutes={['WEB:RIDER:READ']} />
            <Table
                loading={loading}
                size="middle"
                pagination={false}
                bordered
                dataSource={records?.map((item: any, idx: number) => ({ ...item, key: idx + 1 }))}
                columns={columns}
                scroll={{ x: 1300 }}
            />
            <Pagination metadata={metadata} onPagin={(offset, limit) => pagination(offset, limit)} />
        </Card>
    );
};

export default Index;
