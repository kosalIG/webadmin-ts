import React from 'react';
import { Table } from 'antd';
import useColumns from './useColumns';
import useWhitelist from './helper';

const Index: React.FC<{ whitelistRecords: any[]; setwhitelistRecords: (data: any) => void }> = ({
    whitelistRecords,
    setwhitelistRecords,
}) => {
    const { onChange, onRemove } = useWhitelist({ whitelistRecords, setwhitelistRecords });
    const { column } = useColumns({ onRemove, onChange });
    return (
        <div>
            <Table
                size="small"
                rowKey={(e) => e.id}
                bordered
                columns={column}
                dataSource={whitelistRecords?.map((re: any, idx: number) => ({ ...re, idx: idx + 1 }))}
                pagination={{
                    size: 'default',
                    showTotal: () => `Total ${whitelistRecords.length} items`,
                }}
            />
        </div>
    );
};

export default Index;
