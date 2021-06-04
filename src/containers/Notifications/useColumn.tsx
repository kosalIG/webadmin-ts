import React from 'react';
import dateFormat from 'dateformat';
import { Tag } from 'antd';
import { DeleteOutlined, ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import MediaVideo from './components/MediaVideo';
import MediaImage from './components/MediaImage';
import EditNotification from './components/EditNotification';
import PushNotification from './components/PushNotification';
import DeleteNotification from './components/DeleteNotification';

export default function useColumn({ onRefetch }: { onRefetch: (param?: any) => void }): { columns: any[] } {
    const SendTo = {
        ALL: <Tag color="geekblue">All</Tag>,
        ALL_RIDERS: <Tag color="gold">Riders</Tag>,
        ALL_DRIVERS: <Tag color="green">Drivers</Tag>,
    };

    const DeviceType = {
        ALL: 'All',
        IOS: 'iOS',
        ANDROID: 'Android',
    };

    const SendStatus = {
        DRAFT: (
            <Tag icon={<DeleteOutlined />} color="red">
                Draft
            </Tag>
        ),
        PENDING: (
            <Tag icon={<ClockCircleOutlined />} color="warning">
                Pending
            </Tag>
        ),
        SENT: (
            <Tag icon={<CheckCircleOutlined />} color="success">
                Sent
            </Tag>
        ),
    };

    function medaiURL(item: string, data: any) {
        return data?.mediaType === 'VIDEO_URL' ? <MediaVideo url={item} /> : <MediaImage link={item} />;
    }
    function act(id: string, dataObj: any) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <EditNotification dataObj={dataObj} onRefetch={onRefetch} />
                <DeleteNotification status={dataObj?.sendStatus} id={id} onRefetch={onRefetch} />
                <PushNotification status={dataObj?.sendStatus} id={id} onRefetch={onRefetch} />
            </div>
        );
    }
    const columns = [
        {
            title: '#',
            className: 'center',
            dataIndex: 'idx',
            width: 40,
        },
        {
            title: 'Sent to',
            dataIndex: 'sendTo',
            width: 80,
            render: (item: string) => SendTo[item],
        },
        {
            title: 'Device Type',
            dataIndex: 'sendDeviceType',
            width: 80,
            render: (item: string) => DeviceType[item],
        },
        { title: 'Title', dataIndex: 'title', width: 100 },
        {
            title: 'Photo / Video',
            dataIndex: 'mediaURL',
            width: 100,
            render: medaiURL,
        },
        { title: 'Message', dataIndex: ['description', 'kh'], width: 130 },
        {
            title: 'Status',
            dataIndex: 'sendStatus',
            width: 60,
            render: (item: string) => SendStatus[item],
        },
        {
            title: 'Send Date',
            dataIndex: 'sendDate',
            width: 80,
            render: (item: Date) => dateFormat(item, 'dd - mmm - yyyy'),
        },
        {
            title: 'Action',
            width: 50,
            dataIndex: 'id',
            fixed: 'right',
            className: 'center',
            render: act,
        },
    ];

    return { columns };
}
