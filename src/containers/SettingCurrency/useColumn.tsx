import React from 'react';
import { Tag } from 'antd';
import Status, { StatusProps } from 'components/Status';
import { Metadata } from './interface';
import Edit from './components/Edit';
import Delete from './components/Delete';
import SetDefault from './components/SetDefault';

export default function useColumn({ onRefetch }: { onRefetch: (pagin?: Metadata) => void }): { column: any[] } {
    const roundColor = {
        DEFAULT: 'blue',
        UP: 'success',
        DOWN: 'red',
    };

    function rounds(item: any) {
        return <Tag color={roundColor[item]}>{item}</Tag>;
    }

    function status(item: StatusProps) {
        return <Status status={item} />;
    }

    function defaults(isDefault: boolean) {
        return isDefault ? <Tag color="blue">Default</Tag> : '';
    }

    function act(id: string, dataObj: any) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <SetDefault onRefetch={onRefetch} id={id} dataObj={dataObj} />
                <Edit onRefetch={onRefetch} dataObj={dataObj} />
                <Delete onRefetch={onRefetch} id={id} />
            </div>
        );
    }

    const column = [
        { title: '#', dataIndex: 'idx', className: 'center' },
        { title: 'Code', dataIndex: 'code' },
        { title: 'Name', dataIndex: 'name' },
        { title: 'Decimal', dataIndex: 'decimal' },
        {
            title: 'Round',
            dataIndex: 'round',
            render: rounds,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: status,
        },
        {
            title: 'Default',
            dataIndex: 'isDefault',
            className: 'center',
            render: defaults,
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
