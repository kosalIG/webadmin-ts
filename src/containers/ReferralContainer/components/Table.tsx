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
            <Table loading={loading} bordered size="middle" pagination={false} columns={column} dataSource={records} />
            <Pagination metadata={metadata} onPagin={(offset, limit) => onPagin({ offset, limit })} />
        </div>
    );
};

export default Index;
