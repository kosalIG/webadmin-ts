import React from 'react';
import { Tag } from 'antd';
import Status, { StatusProps } from 'components/Status';
import Currency from 'components/Currency';
import Edit from './components/Edit';
import Delete from './components/Delete';
export default function useColumn({ onRefetch }: { onRefetch: (val?: any) => void }): { column: any[] } {
    //
    function userType(tag: string) {
        return tag ? <Tag color="blue">{tag}</Tag> : '---';
    }

    function status(st: StatusProps) {
        return st ? <Status status={st} /> : '---';
    }

    function currency(val: number) {
        return val ? <Currency value={val} type="KHR" /> : '---';
    }

    const column = [
        { title: '#', dataIndex: 'key', width: 70, className: 'center' },
        {
            title: 'User Type',
            dataIndex: 'userType',
            width: 130,
            render: userType,
        },
        { title: 'Group Name', dataIndex: 'name', width: 200 },
        { title: 'Title', dataIndex: 'title', width: 200 },
        { title: 'Label', dataIndex: 'label', width: 200 },
        {
            title: 'Total Use/User/Day',
            dataIndex: ['promotionCoupon', 'totalUsedPerUserPerDay'],
            width: 170,
        },
        {
            title: 'Amount/Use',
            dataIndex: 'amountPerUsed',
            width: 170,
            render: currency,
        },
        {
            title: 'Max Amount/User',
            dataIndex: 'maxAmount',
            width: 170,
            render: currency,
        },
        { title: 'Terms', dataIndex: 'terms', width: 200 },
        { title: 'Description', dataIndex: 'description', width: 200 },
        {
            title: 'Status',
            dataIndex: 'status',
            width: 100,
            fixed: 'right',
            render: status,
        },
        {
            title: 'Action',
            dataIndex: 'id',
            width: 100,
            className: 'center',
            fixed: 'right',
            render: function act(id: string, data: any) {
                return (
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Edit dataObj={data} onRefetch={() => onRefetch()} />

                        <Delete id={id} onRefetch={() => onRefetch()} />
                    </div>
                );
            },
        },
    ];
    return { column };
}
