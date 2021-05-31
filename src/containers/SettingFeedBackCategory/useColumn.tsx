import React from 'react';
import { Avatar } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';
import { s3Url } from 'env';
import Status from 'components/Status';
import Edit from './components/Edit';
import Delete from './components/Delete';

export default function useColumns({ onRefetch }: { onRefetch: () => void }): { columns: any[] } {
    function feedbackIcon(url: string) {
        return <Avatar src={url ? `${s3Url}${url}` : ''} icon={<FileImageOutlined />} />;
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
        { title: '#', dataIndex: 'idx', className: 'center' },
        { title: 'Order Number', dataIndex: 'ordering' },
        {
            title: 'Icon',
            dataIndex: 'icon',
            render: feedbackIcon,
        },
        { title: 'Name', dataIndex: 'name' },
        { title: 'Description', dataIndex: 'description' },
        {
            title: 'Status',
            dataIndex: 'status',
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
