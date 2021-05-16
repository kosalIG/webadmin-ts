import React from 'react';
import { Table } from 'antd';

const Index: React.FC<{ records: any[] }> = ({ records }) => {
    const cols: any[] = [
        { title: '#', dataIndex: 'idx', className: 'center' },
        { title: 'Full Name', dataIndex: 'fullName' },
        { title: 'Country Code', dataIndex: 'countryCode' },
        { title: 'Mobile Number', dataIndex: 'localNumber' },
    ];

    return (
        <Table
            bordered
            size="small"
            pagination={{ size: 'default' }}
            columns={cols}
            rowKey={(e) => e.id}
            dataSource={records?.map((re, idx) => ({ ...re, idx: idx + 1 }))}
        />
    );
};

export default Index;
