import React from 'react';
import { Card, Table } from 'antd';

import Pagination from 'components/Pagination';
import useSearch from 'util/useSearch';
import useColumn from './useColumn';
import { useGetDriver } from './api';
import Breadcrumbs from 'components/Breadcrumbs';

const Index: React.FC = () => {
    const { data, loading, driverGroup, pagination, onSearch, onDelete, onChange } = useGetDriver();
    const { data: records, metadata } = data || {};

    const { handleSearch } = useSearch((val) => onSearch(val));

    const { columns } = useColumn(handleSearch, onDelete, driverGroup);

    return (
        <Card title="Driver" type="inner">
            <Breadcrumbs propRoutes={['WEB:DRIVER:READ']} />
            <Table
                loading={loading}
                size="middle"
                pagination={false}
                bordered
                dataSource={records?.map((item: any, idx: number) => ({ ...item, key: idx + 1 }))}
                columns={columns}
                scroll={{ x: 1500 }}
                onChange={(_, filter) => onChange(filter)}
            />
            <Pagination metadata={metadata} onPagin={(offset, limit) => pagination(offset, limit)} />
        </Card>
    );
};

export default Index;
