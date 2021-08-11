import React from 'react';
import { Table, Card } from 'antd';
import Pagination from 'components/Pagination';
import useColumn from './useColumn';
import { getList } from './api';
import AddNew from './components/AddNew';
import Breadcrumbs from 'components/Breadcrumbs';

const Index: React.FC = () => {
    const { dataObj, loading, onRefetch, onPagin } = getList();
    const { columns } = useColumn({ onRefetch });

    return (
        <Card title="Setting - Commission Charge" type="inner">
            <Breadcrumbs propRoutes={['WEB:COMMISSION:READ']} />

            <AddNew onRefetch={onRefetch} />
            <Table
                bordered
                pagination={false}
                loading={loading}
                size="middle"
                columns={columns}
                rowKey={(rec: any) => rec.id}
                scroll={{ x: 1400 }}
                dataSource={dataObj?.data?.map((items: any, idx) => ({ ...items, idx: idx + 1 }))}
            />
            <Pagination metadata={dataObj?.metadata} onPagin={(offset, limit) => onPagin({ limit, offset })} />
        </Card>
    );
};

export default Index;
