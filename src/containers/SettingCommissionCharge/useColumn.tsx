import React from 'react';
import { Tag } from 'antd';
import Status from 'components/Status';
import Currency from 'components/Currency';
import Edit from './components/Edit';
import Delete from './components/Delete';
import SetDefault from './components/SetDefault';

export default function useColumns({ onRefetch }: { onRefetch: () => void }): { columns: any[] } {
    function mounts(item: number, dataObj: any) {
        return dataObj.type === 'AMOUNT' ? <Currency value={item} type="KHR" /> : `${item}%`;
    }

    function status(item: any) {
        return <Status status={item} />;
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

    const columns = [
        { title: '#', dataIndex: 'idx', className: 'center', width: 70 },
        {
            title: 'Type',
            dataIndex: 'type',
            width: 120,
            render: type,
        },
        { title: 'Name', dataIndex: 'name', width: 250 },
        {
            title: 'Amount',
            dataIndex: 'amount',
            width: 120,
            render: mounts,
        },
        { title: 'Max Charge/Day', dataIndex: 'maxChargePerDay', width: 150 },
        {
            title: 'Status',
            dataIndex: 'status',
            width: 100,
            render: status,
        },
        { title: 'Description', dataIndex: 'description', width: 300 },
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

function type(text: string) {
    const status = { PERCENTAGE: 'blue', AMOUNT: 'purple', PRICE_CAP: 'green' };
    return <Tag color={status[text]}>{text}</Tag>;
}
