import React from 'react';
import { Card, Table } from 'antd';
import Pagination from 'components/Pagination';
import AddNotification from './components/AddNotification';
import useColumns from './useColumn';
import { useGetList } from './api';

const Index: React.FC = () => {
    const { dataObj, loading, onRefetch } = useGetList();
    const { columns } = useColumns({ onRefetch });

    return (
        <Card title="Notification" type="inner">
            <AddNotification onRefetch={onRefetch} />
            <Table
                bordered
                loading={loading}
                pagination={false}
                size="middle"
                columns={columns}
                dataSource={dataObj?.results?.map((item: any, idx: number) => ({ ...item, idx: idx + 1 }))}
                scroll={{ x: 1600 }}
            />
            <Pagination
                metadata={dataObj?.metadata}
                onPagin={(offset: number, limit: number) => onRefetch({ offset, limit })}
            />
        </Card>
    );
};

export default Index;
