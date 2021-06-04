import React from 'react';
import { Table } from 'antd';
import Pagination from 'components/Pagination';

interface TableProps {
    column: any[];
    records: any[];
    loading: boolean;
    metadata?: any;
    onPagin: (param: any) => void;
}
const Index: React.FC<TableProps> = ({ column, records, metadata, loading, onPagin }) => {
    return (
        <div>
            <Table
                loading={loading}
                bordered
                size="middle"
                pagination={false}
                columns={column}
                rowKey={(e: any) => e?.id}
                dataSource={records?.map((item: any, idx: number) => ({ ...item, idx: idx + 1 }))}
            />
            <Pagination metadata={metadata} onPagin={(offset, limit) => onPagin({ offset, limit })} />
        </div>
    );
};

export default Index;
