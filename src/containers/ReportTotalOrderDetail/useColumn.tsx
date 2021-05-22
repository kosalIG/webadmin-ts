import React from 'react';
import { Tag } from 'antd';
import DateFormat from 'components/DataFormat';

export default function useColumn(): { columns: any[] } {
    function status(st: any) {
        return st ? <Tag color="geekblue">{st} </Tag> : '---';
    }

    function dateTime(date: Date) {
        return date ? <DateFormat value={date} /> : '---';
    }

    const columns = [
        { title: '#', dataIndex: 'idx', className: 'center' },
        {
            title: 'Driver Name',
            dataIndex: ['driver', 'fullName'],
            render: (item: string) => item || '---',
        },
        {
            title: 'Mobile Number',
            dataIndex: ['driver', 'mobileNumber'],
            render: (item: string) => item || '---',
        },
        {
            title: 'Model',
            dataIndex: ['driver', 'modelName'],
            render: (item: string) => item || '---',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: status,
        },
        {
            title: 'Date Time',
            dataIndex: 'createdAt',
            render: dateTime,
        },
    ];
    return { columns };
}
