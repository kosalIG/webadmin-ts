import React from 'react';
import { Table, Card } from 'antd';
import useColumn from './useColumn';
import { getList } from './api';
import AddNew from './components/AddNew';

const Index: React.FC = () => {
    const { dataObj, loading, refetch } = getList();
    const { columns } = useColumn({ refetch });

    return (
        <Card title="Setting - Store Control" type="inner">
            <AddNew onRefetch={refetch} />
            <Table
                bordered
                pagination={false}
                loading={loading}
                size="middle"
                columns={columns}
                rowKey={(rec: any) => rec.id}
                scroll={{ x: 1400 }}
                dataSource={dataObj?.results?.map((items: any, idx) => ({ ...items, idx: idx + 1 }))}
            />
        </Card>
    );
};

export default Index;
