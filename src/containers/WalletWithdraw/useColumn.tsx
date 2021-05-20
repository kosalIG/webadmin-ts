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
                    walletId={obj?.walletId}
                    onRefetch={onRefetch}
                    fullName={obj?.wallet?.user?.fullName}
                    amount={obj?.amount}
                />
                <RejectIcon
                    id={id}
                    walletId={obj?.walletId}
                    onRefetch={onRefetch}
                    fullName={obj?.wallet?.user?.fullName}
                    amount={obj?.amount}
                />
            </div>
        );
    }

    const columns = [
        { title: '#', dataIndex: 'key', className: 'center' },
        {
            title: 'Date time',
            dataIndex: 'createdAt',
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
            title: 'Status',
            dataIndex: 'status',
            filters: [
                { text: 'PENDING', value: 'PENDING' },
                { text: 'APPROVED', value: 'APPROVED' },
                { text: 'REJECTED', value: 'REJECTED' },
            ],
            defaultFilteredValue: ['PENDING'],
            render: status,
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            render: currency,
        },
        {
            title: 'Acount',
            dataIndex: 'accountType',
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
