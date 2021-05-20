import React from 'react';
import { Tag } from 'antd';
import dateFormat from 'dateformat';
import Currency from 'components/Currency';
import ApprovalIcon from './components/ApproveIcon';
import RejectIcon from './components/RejectIcon';

export default function useColumn({ onRefetch }: { onRefetch: () => void }): { columns: any[] } {
    const st = {
        PENDING: 'warning',
        REJECTED: 'red',
        APPROVED: 'green',
    };

    function status(e: any) {
        return e ? <Tag color={st[e]}>{e}</Tag> : '---';
    }

    function currency(val: number) {
        return val ? <Currency value={val} type="KHR" /> : '---';
    }

    function act(id: string, obj: any) {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <ApprovalIcon
                    id={id}
                    onRefetch={onRefetch}
                    fullName={obj?.wallet?.user?.fullName}
                    amount={obj?.amount}
                />
                <RejectIcon id={id} onRefetch={onRefetch} fullName={obj?.wallet?.user?.fullName} amount={obj?.amount} />
            </div>
        );
    }

    const columns = [
        { title: '#', dataIndex: 'key', className: 'center' },
        {
            title: 'Date time',
            dataIndex: 'requestedAt',
            render: (item: Date) => (item ? dateFormat(item, 'dd-mmm-yyyy hh:MM:ss tt') : '--'),
        },
        {
            title: 'Full name',
            dataIndex: ['wallet', 'user', 'fullName'],
            render: (e: string) => e || '--',
        },
        {
            title: 'Mobile number',
            dataIndex: ['wallet', 'user', 'mobileNumber'],
            render: (e: string) => e || '--',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            render: currency,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: status,
        },
        {
            title: 'Action',
            dataIndex: 'id',
            className: 'center',
            render: act,
        },
    ];

    return { columns };
}
