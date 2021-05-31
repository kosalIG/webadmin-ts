import React from 'react';
import { Table, Card } from 'antd';
import Pagination from 'components/Pagination';
import useColumn from './useColumn';
import { getList } from './api';
import AddNew from './components/AddNew';

const Index: React.FC = () => {
    const { dataObj, loading, onRefetch } = getList();
    const { columns } = useColumn({ onRefetch });

    return (
        <Card title="Setting - Payment Method" type="inner">
            <AddNew onRefetch={onRefetch} />
            <Table
                bordered
                pagination={false}
                loading={loading}
                size="middle"
                columns={columns}
                rowKey={(rec: any) => rec.id}
                dataSource={dataObj?.data?.map((items: any, idx) => ({ ...items, idx: idx + 1 }))}
            />
            <Pagination metadata={dataObj?.metadata} onPagin={(offset, limit) => onRefetch({ offset, limit })} />
        </Card>
    );
};

export default Index;
