import React from 'react';
import { Tag } from 'antd';
import DateFormat from 'components/DataFormat';
import Edit from './components/Edit';
import Delete from './components/Delete';

export default function useColumns({ onRefetch }: { onRefetch: () => void }): { columns: any[] } {
    const type = {
        RIDER_RIDER: <Tag color="processing">RIDER_RIDER</Tag>,
        DRIVER_DRIVER: <Tag color="purple">DRIVER_DRIVER</Tag>,
        RIDER_LOCATION: <Tag color="warning">RIDER_LOCATION</Tag>,
    };
    const status = {
        ENABLED: <Tag color="success">ENABLED</Tag>,
        DISABLED: <Tag color="warning">DISABLED</Tag>,
        DELETED: <Tag color="error">DELETED</Tag>,
    };
    function dateTime(date: Date) {
        return <DateFormat value={date} />;
    }

    function act(id: string, dataObj: any) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Edit onRefetch={onRefetch} dataObj={dataObj} />
                <Delete onRefetch={onRefetch} id={id} />
            </div>
        );
    }

    const columns = [
        { title: '#', dataIndex: 'idx', className: 'center', width: 50 },
        {
            title: 'Type',
            dataIndex: 'type',
            filterMultiple: false,
            filters: [
                { text: 'RIDER_RIDER', value: 'RIDER_RIDER' },
                { text: 'DRIVER_DRIVER', value: 'DRIVER_DRIVER' },
                { text: 'RIDER_LOCATION', value: 'RIDER_LOCATION' },
            ],
            render: (item: string) => type[item],
        },
        {
            title: 'Status',
            dataIndex: 'status',
            filterMultiple: false,
            filters: [
                { text: 'ENABLED', value: 'ENABLED' },
                { text: 'DISABLED', value: 'DISABLED' },
            ],
            render: (item: string) => status[item] || '---',
        },
        {
            title: 'Started At',
            dataIndex: 'startedAt',
            render: dateTime,
        },
        {
            title: 'Ended At',
            dataIndex: 'endedAt',
            render: dateTime,
        },
        { title: 'Description', dataIndex: 'description', width: 200 },
        {
            title: 'Action',
            dataIndex: 'id',
            width: 100,
            className: 'center',
            fixed: 'right',
            render: act,
        },
    ];
    return { columns };
}
