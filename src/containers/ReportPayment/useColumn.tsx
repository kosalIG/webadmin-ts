import React from 'react';
import Currency from 'components/Currency';

export default function useColumn(): { columns: any[] } {
    function currencys(value: number) {
        return <Currency value={value} type="KHR" />;
    }

    const columns = [
        { title: '#', id: 'idx', dataIndex: 'idx', className: 'center', width: 50 },
        {
            title: 'Order Id',
            dataIndex: 'orderID',
            id: 'orderID',
            width: 100,
            render: (item: string) => item || '---',
        },
        {
            title: 'Full Name',
            dataIndex: ['driver', 'fullName'],
            id: 'fullName',
            width: 150,
            render: (item: string) => item || '---',
        },
        {
            title: 'Mobile Number',
            dataIndex: ['driver', 'mobileNumber'],
            id: 'mobileNumber',
            width: 150,
            render: (item: string) => item || '---',
        },
        {
            title: 'Pickup address',
            dataIndex: ['order', 'orderDetail', 'pickupAddressName'],
            id: 'pickupAddressName',
            width: 250,
            render: (item: string) => item || '---',
        },
        {
            title: 'Dropoff address',
            dataIndex: ['order', 'orderDetail', 'dropoffAddressName'],
            id: 'dropoffAddressName',
            width: 250,
            render: (item: string) => item || '---',
        },
        {
            title: 'Promotion amount',
            dataIndex: 'commissionFee',
            id: 'commissionFee',
            className: 'right',
            render: currencys,
            width: 150,
        },
        {
            title: 'Total discount',
            dataIndex: 'discountAmount',
            id: 'discountAmount',
            className: 'right',
            width: 150,
            render: currencys,
        },
        {
            title: 'Amount',
            dataIndex: 'totalAmount',
            id: 'totalAmount',
            className: 'right',
            width: 150,
            render: currencys,
        },
    ];
    return { columns };
}

export const groupColumn = [
    {
        groupTitle: 'Payment Field',
        group: [
            { title: 'Key', dataIndex: 'idx' },
            { title: 'Order Id', dataIndex: 'orderID' },
            { title: 'Full Name', dataIndex: 'fullName' },
            { title: 'Mobile Number', dataIndex: 'mobileNumber' },
            { title: 'Pickup address', dataIndex: 'pickupAddressName' },
            { title: 'Dropoff address', dataIndex: 'dropoffAddressName' },
            { title: 'Promotion amount', dataIndex: 'commissionFee' },
            { title: 'Total discount', dataIndex: 'discountAmount' },
            { title: 'Amount', dataIndex: 'totalAmount' },
        ],
    },
];
