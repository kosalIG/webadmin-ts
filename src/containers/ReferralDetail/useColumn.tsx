/* eslint-disable react/display-name */
import React from 'react';
import Currency from 'components/Currency';
import { Tag } from 'antd';
import DateFormat from 'components/DataFormat';
export function useColumn(type: string): { column: any[] } {
    const column = [
        {
            width: 80,
            className: 'center',
            title: '#',
            dataIndex: 'idx',
        },
        {
            width: 200,
            title: 'First Name',
            dataIndex: ['scannerInfo', 'firstName'],
            render: (item: string) => item || '---',
        },
        {
            width: 200,
            title: 'Last Name',
            dataIndex: ['scannerInfo', 'lastName'],
            render: (item: string) => item || '---',
        },
        {
            width: 200,
            title: 'Mobile Number',
            dataIndex: ['scannerInfo', 'mobileNumber'],
            render: (item: string) => item || '---',
        },
        {
            width: 200,
            title: 'Referral Amount',
            dataIndex: 'referenceValue',
            render: (item: any) => (type ? '---' : <Currency value={item} type="KHR" />),
        },
        {
            width: 150,
            title: 'Referral Code',
            dataIndex: ['scannerInfo', 'referralCode'],
            render: (item: string) => <Tag color="blue">{item}</Tag> || '---',
        },
        {
            width: 250,
            title: 'Approved At',
            dataIndex: 'approvedAt',
            render: (item: Date, obj: any) => (
                <div>{obj?.status === 'APPROVED' ? <DateFormat value={item} /> : '---'}</div>
            ),
        },
    ];
    return { column };
}
