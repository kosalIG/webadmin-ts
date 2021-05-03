import React from 'react';
import { Table } from 'antd';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import Pagination from 'components/Pagination';

import useColumn from './useColumn';
import { TRIP_HISTORY } from '../../api';

const TripHistory: React.FC = () => {
    const { id } = useParams<{ id: string }>() || {};
    const { columns } = useColumn();
    const { data: tripHistory, loading, refetch } = useQuery(TRIP_HISTORY, {
        variables: { driverID: id, limit: 10, offset: 0 },
    });

    const { getPaymentTransactionHistories } = tripHistory || {};
    const { data: records, metadata } = getPaymentTransactionHistories || {};
    return (
        <div>
            <Table
                loading={loading}
                size="middle"
                bordered
                pagination={false}
                columns={columns}
                scroll={{ x: 1400 }}
                dataSource={records?.map((item: any, idx: number) => ({ ...item, idx: idx + 1, key: item.id }))}
            />
            <Pagination metadata={metadata} onPagin={(offset, limit) => refetch({ driverID: id, limit, offset })} />
        </div>
    );
};

export default TripHistory;
