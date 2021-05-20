import React from 'react';
import { Card, Table } from 'antd';
import Pagination from 'components/Pagination';
import Filter from './components/Filter';
import useColumn from './useColumn';
import { useGetPromotion } from './api';

const Index: React.FC = () => {
    const { dataObj, qString, loading, onRefetch, handleDate, handleChange } = useGetPromotion();
    const { columns } = useColumn({ onRefetch });

    return (
        <Card title="Wallet - Withdraw" type="inner">
            <Filter qString={qString} handleDate={handleDate} />
            <Table
                size="middle"
                bordered
                loading={loading}
                pagination={false}
                columns={columns}
                onChange={(_, filter) => handleChange(filter)}
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
