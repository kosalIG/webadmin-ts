import React from 'react';
import dateFormat from 'dateformat';
import Currency from 'components/Currency';

import calulateTime from './calulateTime';

export default function useColumn(): { columns: any[] } {
    const columns = [
        {
            title: '#',
            dataIndex: 'idx',
        },
        {
            title: 'Receipt No',
            dataIndex: 'receiptNo',
            render: (item: string) => item || '---',
        },
        {
            title: 'Customer Name',
            dataIndex: ['customer', 'fullName'],
            render: (item: string) => item || '---',
        },
        {
            title: 'Mobile Number',
            dataIndex: ['customer', 'mobileNumber'],
            render: (item: string) => item || '---',
        },
        {
            title: 'Start Date',
            dataIndex: ['order', 'orderDetail'],
            render: (rec: any) => (rec ? dateFormat(rec.pickupAt, 'dd-mmm-yyyy h:MM:ss tt') : 'N/A'),
        },
        {
            title: 'End Date',
            dataIndex: ['order', 'orderDetail'],
            render: (rec: any) => (rec ? dateFormat(rec.dropoffAt, 'dd-mmm-yyyy h:MM:ss tt') : 'N/A'),
        },
        {
            title: 'Duration',
            dataIndex: 'totalDuration',
            render: (val: number) => calulateTime(val),
        },
        {
            title: 'Distance',
            dataIndex: 'totalDistance',
            render: (item: string) => (parseFloat(item) / 1000).toFixed(2) + ' km',
        },
        {
            title: 'Total Discount',
            dataIndex: 'discountAmount',
            render: function discount(item: number) {
                return <Currency value={item} type="KHR" />;
            },
        },
        {
            title: 'Amount',
            dataIndex: 'totalAmount',
            render: function amount(item: number) {
                return <Currency value={item} type="KHR" />;
            },
        },
    ];
    return { columns };
}
