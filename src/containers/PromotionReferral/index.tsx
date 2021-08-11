import React from 'react';
import { Card, Table } from 'antd';
import Pagination from 'components/Pagination';

import useColumn from './useColumn';
import { useGetPromotion } from './api';
import AddNew from './components/AddNew';
import Breadcrumbs from 'components/Breadcrumbs';

const Index: React.FC = () => {
    const { dataObj, loading, onRefetch } = useGetPromotion();
    const { column } = useColumn({ onRefetch });

    return (
        <Card title>
            <Breadcrumbs propRoutes={['WEB:REFERRAL_PROMOTION:READ']} />

            <AddNew onRefetch={onRefetch} />
            <Table
                bordered
                size="middle"
                columns={column}
                dataSource={dataObj?.data?.map((re: any, idx: number) => ({ ...re, key: idx + 1 }))}
                scroll={{ x: 2000 }}
                loading={loading}
                pagination={false}
            />
            <Pagination
                metadata={dataObj?.metadata}
                onPagin={(offset: number, limit: number) => onRefetch({ offset, limit })}
            />
        </Card>
    );
};

export default Index;
