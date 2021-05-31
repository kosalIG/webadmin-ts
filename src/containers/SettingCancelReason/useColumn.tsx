import React from 'react';
import { Tag } from 'antd';
import Status from 'components/Status';
import Edit from './components/Edit';
import Delete from './components/Delete';

export default function useColumns({ onRefetch }: { onRefetch: () => void }): { columns: any[] } {
    const typeText = {
        DRIVER_TYPE: 'Driver',
        RIDER_TYPE: 'Rider',
    };

    const typeColor = {
        DRIVER_TYPE: 'purple',
        RIDER_TYPE: 'blue',
    };

    function typs(item: any) {
        return <Tag color={typeColor[item]}>{typeText[item]}</Tag>;
    }

    function status(item: any) {
        return <Status status={item} />;
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
        {
            title: '#',
            dataIndex: 'idx',
            className: 'center',
            width: 35,
        },
        {
            title: 'Type',
            dataIndex: 'type',
            width: 100,
            filterMultiple: false,
            filters: [
                { text: 'Rider', value: 'RIDER_TYPE' },
                { text: 'Driver', value: 'DRIVER_TYPE' },
            ],
            render: typs,
        },
        {
            width: 300,
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Ordering',
            width: 100,
            dataIndex: 'ordering',
            ellipsis: true,
        },
        {
            title: 'Status',
            width: 100,
            dataIndex: 'status',
            filters: [
                { text: 'Active', value: 'ACTIVE' },
                { text: 'Inactive', value: 'INACTIVE' },
            ],
            render: status,
        },
        {
            title: 'Action',
            dataIndex: 'id',
            width: 100,
            className: 'center',
            render: act,
        },
    ];
    return { columns };
}
