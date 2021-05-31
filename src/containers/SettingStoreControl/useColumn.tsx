import React from 'react';
import { Tag } from 'antd';
import Status from 'components/Status';
import Edit from './components/Edit';
import Delete from './components/Delete';

export default function useColumns({ refetch }: { refetch: () => void }): { columns: any[] } {
    function forceUpdate(item: boolean) {
        return item ? <Tag color="blue">True</Tag> : <Tag color="orange">False</Tag>;
    }

    function storeUrl(item: any) {
        return (
            <a href={item} target="_blank" rel="noreferrer">
                {item}
            </a>
        );
    }
    function status(item: any) {
        return <Status status={item} />;
    }

    function act(id: string, dataObj: any) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Edit onRefetch={refetch} dataObj={dataObj} />
                <Delete onRefetch={refetch} id={id} />
            </div>
        );
    }

    const AppType = { RIDER: 'Rider', DRIVER: 'Driver' };
    const Mobile = { IOS: 'iOS', ANDROID: 'Android' };

    const columns = [
        { title: '#', dataIndex: 'idx', className: 'center' },
        {
            title: 'Force Update',
            dataIndex: 'isForceUpdate',
            render: forceUpdate,
        },
        {
            title: 'App Type',
            dataIndex: 'appType',
            render: (item: string) => AppType[item],
        },
        {
            title: 'Device OS',
            dataIndex: 'deviceType',
            render: (item: string) => Mobile[item],
        },
        {
            title: 'Version',
            dataIndex: 'storeVersion',
        },
        {
            title: 'Version Name',
            dataIndex: 'storeVersionName',
        },
        {
            title: 'Store Url',
            dataIndex: 'storeURL',
            width: 400,
            render: storeUrl,
        },
        {
            title: 'Status',
            width: 100,
            dataIndex: 'status',
            render: status,
        },
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
