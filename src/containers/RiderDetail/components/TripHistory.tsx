import React from 'react';
import { Table } from 'antd';

import useColumn from './useColumn';
import Pagination from 'components/Pagination';

interface TripHistoryProps {
    records: any[];
    loading: boolean;
    metadata: MetaData;
    refetch: (limit: number, offset: number) => void;
}

interface MetaData {
    total: number;
    offset: number;
    limit: number;
}
const TripHistory: React.FC<TripHistoryProps> = ({ records, loading, metadata, refetch }) => {
    const { columns } = useColumn();
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
            <Pagination metadata={metadata} onPagin={(limit, offset) => refetch(limit, offset)} />
        </div>
    );
};

export default TripHistory;
