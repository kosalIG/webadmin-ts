import React from 'react';
import { Card, Table } from 'antd';

const Index: React.FC = () => {
    const column = [
        { title: '#', dataIndex: 'key' },
        { title: 'ID', dataIndex: 'myID' },
        {
            title: 'Name&Phone',
            dataIndex: 'fullName',
        },
        { title: 'Total Trans', dataIndex: 'tripCount' },
        {
            title: 'Total promo',
            dataIndex: 'totalDiscount',
        },
        {
            title: 'Total earn',
            dataIndex: 'totalIncome',
        },
    ];

    return (
        <Card title="Top Driver" type="inner" hoverable style={{ minHeight: 477, cursor: 'default' }}>
            <Table columns={column} pagination={false} dataSource={[]} size="small" />
        </Card>
    );
};

export default Index;
