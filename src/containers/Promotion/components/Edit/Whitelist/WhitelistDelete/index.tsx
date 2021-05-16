import React from 'react';
import { Table } from 'antd';
import { Delete } from 'components/ActionIcons';

const Index: React.FC<{ records: any[]; onRemoveRecords: (id: string) => void }> = ({
    records = [],
    onRemoveRecords,
}) => {
    const cols = [
        { title: '#', dataIndex: 'idx', className: 'center' },
        { title: 'Full Name', dataIndex: 'fullName' },
        { title: 'Country Code', dataIndex: 'countryCode' },
        { title: 'Mobile Number', dataIndex: 'localNumber' },
        {
            title: 'Action',
            dataIndex: 'id',
            className: 'center',
            width: 100,
            render: function act(id: string) {
                return (
                    <Delete title="Are you sure want to remove this records?" onConfirm={() => onRemoveRecords(id)} />
                );
            },
        },
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
