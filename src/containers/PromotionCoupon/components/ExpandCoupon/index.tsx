import React from 'react';
import { Table } from 'antd';
import { useCouponColumn } from './useCouponColumn';
const Index: React.FC<{ records: any[]; onRefetch: (val?: any) => void }> = ({ records, onRefetch }) => {
    const { columns } = useCouponColumn({ onRefetch });
    return (
        <div style={{ padding: 10 }}>
            <Table
                size="small"
                pagination={{
                    size: 'default',
                    hideOnSinglePage: true,
                    showSizeChanger: true,
                }}
                bordered
                loading={false}
                columns={columns}
                dataSource={records.map((pro: any, idx: number) => ({
                    ...pro,
                    key: idx + 1,
                }))}
            />
        </div>
    );
};

export default Index;
