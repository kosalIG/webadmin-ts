import React from 'react';
import { Avatar } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';
import { s3Url } from 'env';
import Status from 'components/Status';
import Edit from './components/Edit';
import Delete from './components/Delete';

export default function useColumns({
    onRefetch,
    paymentEnum,
}: {
    onRefetch: () => void;
    paymentEnum: string[];
}): { columns: any[] } {
    function vehicleIcon(url: string) {
        return <Avatar src={url ? `${s3Url}${url}` : ''} icon={<FileImageOutlined />} />;
    }

    function status(item: any) {
        return <Status status={item} />;
    }

    function act(id: string, dataObj: any) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Edit paymentEnum={paymentEnum} onRefetch={onRefetch} dataObj={dataObj} />
                <Delete onRefetch={onRefetch} id={id} />
            </div>
        );
    }
    const columns = [
        { title: '#', dataIndex: 'idx', width: 75, className: 'center' },
        {
            title: 'Icon',
            dataIndex: 'icon',
            className: 'center',
            width: 90,
            render: vehicleIcon,
        },
        { title: 'Payment Method', dataIndex: 'type', width: 150 },
        { title: 'Name', dataIndex: 'name' },
        {
            title: 'Status',
            dataIndex: 'status',
            width: 100,
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
