import React from 'react';
import { Table, Card } from 'antd';
import Pagination from 'components/Pagination';

import { useGetList } from './api';
import useColumn from './useColumn';

const index: React.FC = () => {
    const { dataObj, loading, onPagin } = useGetList();
    const { column } = useColumn();

    return (
        <Card title="Activiy Report" type="inner">
            <Table
                size="middle"
                loading={loading}
                bordered
                pagination={false}
                rowKey={(item) => item?.driver?.id}
                dataSource={dataObj?.data?.map((item, idx) => ({ ...item, idx: idx + 1 }))}
                columns={column}
            />
            <Pagination metadata={dataObj?.metadata} onPagin={(offset, limit) => onPagin({ limit, offset })} />
        </Card>
    );
};

export default index;
