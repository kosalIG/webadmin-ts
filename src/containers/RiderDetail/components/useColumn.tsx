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
            title: 'Driver Name',
            dataIndex: ['driver', 'fullName'],
            render: (item: string) => item || '---',
        },
        {
            title: 'Mobile Number',
            dataIndex: ['driver', 'mobileNumber'],
            render: (item: string) => item || '---',
        },
        {
            title: 'Total Distance',
            dataIndex: 'totalDistance',
            render: (item: string) => (parseFloat(item) / 1000).toFixed(2) + ' km',
        },
        {
            title: 'Pickup At',
            dataIndex: ['order', 'orderDetail'],
            render: (rec: any) => (rec ? dateFormat(rec.pickupAt, 'dd-mmm-yyyy h:MM:ss tt') : 'N/A'),
        },
        {
            title: 'Dropoff At',
            dataIndex: ['order', 'orderDetail'],
            render: (rec: any) => (rec ? dateFormat(rec.dropoffAt, 'dd-mmm-yyyy h:MM:ss tt') : 'N/A'),
        },
        {
            title: 'Total Duration',
            dataIndex: 'totalDuration',
            render: (val: number) => calulateTime(val),
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
