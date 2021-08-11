import React from 'react';
import { Table, Card } from 'antd';
import AddNew from './components/AddNew';
import useColumns from './useColumn';
import { useGetlist } from './api';
import Breadcrumbs from 'components/Breadcrumbs';

const Index: React.FC = () => {
    const { loading, records, getList } = useGetlist();
    const { columns } = useColumns({ getList });
    return (
        <Card title="Setting - Color" type="inner">
            <Breadcrumbs propRoutes={['WEB:COLOR:READ']} />

            <AddNew getList={getList} />
            <Table
                bordered
                loading={loading}
                pagination={false}
                size="middle"
                columns={columns}
                rowKey={(rec: any) => rec.id}
                dataSource={records?.map((items: any, idx) => ({ ...items, idx: idx + 1 }))}
            />
        </Card>
    );
};

export default Index;
