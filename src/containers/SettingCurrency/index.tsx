import React from 'react';
import { Table, Card } from 'antd';
import Pagination from 'components/Pagination';

import { useGetList } from './api';
import useColumn from './useColumn';
import AddNew from './components/AddNew';
import Breadcrumbs from 'components/Breadcrumbs';

const index: React.FC = () => {
    const { dataObj, loading, onPagin, onRefetch } = useGetList();
    const { column } = useColumn({ onRefetch });

    return (
        <Card title="Setting - Currency" type="inner">
            <Breadcrumbs propRoutes={['WEB:CURRENCY:READ']} />

            <AddNew onRefetch={onRefetch} />
            <Table
                size="middle"
                loading={loading}
                bordered
                pagination={false}
                rowKey={(item) => item?.id}
                dataSource={dataObj?.data?.map((item, idx) => ({ ...item, idx: idx + 1 }))}
                columns={column}
            />
            <Pagination metadata={dataObj?.metadata} onPagin={(offset, limit) => onPagin({ limit, offset })} />
        </Card>
    );
};

export default index;
