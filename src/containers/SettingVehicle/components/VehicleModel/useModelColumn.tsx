import React from 'react';
import { Avatar } from 'antd';
import { CarOutlined } from '@ant-design/icons';
import { s3Url } from 'env';
import ModelEdit from './ModelEdit';
import ModelDelete from './ModelDelete';

export default function useColumn({
    getModel,
    vehicleId,
}: {
    getModel: () => void;
    vehicleId: string;
}): { column: any[] } {
    function vehicleIcon(url: string) {
        return <Avatar src={url ? `${s3Url}${url}` : ''} icon={<CarOutlined />} />;
    }

    function act(id: string, dataObj: any) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <ModelEdit vehicleId={vehicleId} getModel={getModel} dataObj={dataObj} />
                <ModelDelete id={id} getModel={getModel} />
            </div>
        );
    }
    const column = [
        { title: '#', dataIndex: 'idx' },
        { title: 'Model Name', dataIndex: 'name' },
        {
            title: 'Image',
            dataIndex: ['morevalue', 'image'],
            render: vehicleIcon,
        },
        {
            title: 'Action',
            className: 'center',
            dataIndex: 'id',
            render: act,
        },
    ];
    return { column };
}
