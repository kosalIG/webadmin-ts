import React from 'react';
import { Card, Table } from 'antd';
import Pagination from 'components/Pagination';
import useColumn from './useColumn';
import { useGetPromotion } from './api';
import Filter from './components/Filter';
import Breadcrumbs from 'components/Breadcrumbs';
const Index: React.FC = () => {
    const { qString, dataObj, handleDate, handleChange, onRefetch } = useGetPromotion();
    const { columns } = useColumn();

    return (
        <Card title="Wallet- Promotion" type="inner">
            <Breadcrumbs propRoutes={['WEB:WALLET_PROMOTION:READ']} />

            <Filter qString={qString} handleDate={handleDate} />
            <Table
                size="middle"
                bordered
                loading={false}
                pagination={false}
                onChange={(_, filter) => handleChange(filter)}
                columns={columns}
                dataSource={dataObj?.results?.map((re: any, idx: number) => ({ ...re, key: idx + 1 }))}
            />
            <Pagination
                metadata={dataObj?.metadata}
                onPagin={(offset: number, limit: number) => onRefetch({ offset, limit })}
            />
        </Card>
    );
};

export default Index;
