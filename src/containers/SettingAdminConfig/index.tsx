import React from 'react';
import { Table, Card } from 'antd';
import Pagination from 'components/Pagination';
import useColumn from './useColumn';
import { getList } from './api';
import AddNew from './components/AddNew';

const Index: React.FC = () => {
    const { dataObj, loading, onRefetch, onPagin, handleFilter } = getList();
    const { columns } = useColumn({ onRefetch });

    return (
        <Card title="Setting - Admin Config" type="inner">
            <AddNew onRefetch={onRefetch} />
            <Table
                bordered
                pagination={false}
                loading={loading}
                size="middle"
                columns={columns}
                rowKey={(rec: any) => rec.id}
                scroll={{ x: 1400 }}
                onChange={(_, filter) => handleFilter(filter)}
                dataSource={dataObj?.results?.map((items: any, idx: number) => ({ ...items, idx: idx + 1 }))}
            />
            <Pagination metadata={dataObj?.metadata} onPagin={(offset, limit) => onPagin({ limit, offset })} />
        </Card>
    );
};

export default Index;
