import React from 'react';
import { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import { View } from 'components/ActionIcons';

interface Column {
    key: number;
    name: string;
}
interface UserColumn {
    column: ColumnsType<Column>;
}

export default function useColumn(): UserColumn {
    function act(id: string) {
        return <View navkey="WEB:DRIVER:READ_DETAIL" to={`/dashboard/pickup-driver/${id}`} />;
    }
    const column: ColumnsType<Column> = [
        { title: '#', dataIndex: 'idx', width: 60, className: 'center' },
        {
            title: 'Driver Name',
            dataIndex: ['driver', 'fullName'],
            render: (item) => item || '---',
        },
        { title: 'Rider Name', dataIndex: ['rider', 'fullName'], render: (item) => item || '---' },
        {
            title: 'Accept Time',
            dataIndex: 'updatedAt',
            width: 250,
            render: (item) => moment(item).format('DD- MMM -YYYY hh:mm:ss​ a'),
        },
        { title: 'Duration', dataIndex: 'updatedAt', render: (item) => moment(item).fromNow(true) },
        {
            title: 'Est Duration',
            dataIndex: ['orderDetail', 'estimatedDuration'],
            render: (item) => Math.ceil(item / 60) + ' mn' || 0 + ' mn',
        },
        {
            title: 'Est Distance',
            dataIndex: ['orderDetail', 'estimatedDistance'],
            render: (item) => (parseFloat(item) / 1000).toFixed(2) + ' km',
        },
        { title: 'Address', dataIndex: ['orderDetail', 'pickupAddressName'], width: 250 },
        {
            title: 'Action',
            dataIndex: 'id',
            width: 100,
            fixed: 'right',
            className: 'center',
            render: act,
        },
    ];
    return { column };
}
