import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, Tooltip } from 'antd';
import moment from 'moment';
import { View } from 'components/ActionIcons';
import DataFormat from 'components/DataFormat';
import Currency from 'components/Currency';
const googleUrl = '//www.google.com/maps/search/?api=1&query=';
export default function useColumn(): { columns: any[] } {
    function date(date: any) {
        return date ? <DataFormat value={date} /> : '---';
    }

    function dateNow(date: any) {
        return date ? moment(new Date(date), 'YYYYMMDD').fromNow() : '---';
    }

    function status(st: any, color: string) {
        return st ? <Tag color={color}>{st} </Tag> : '---';
    }

    function viewOnMap(item: any, data: any) {
        return item ? (
            <Tooltip placement="left" title="View on Map">
                <Link
                    to={`${googleUrl}${data?.orderDetail?.pickupLat},${data?.orderDetail?.pickupLng}`}
                    target="_blank"
                >
                    {item}
                </Link>
            </Tooltip>
        ) : (
            <span>Any Where</span>
        );
    }

    function act(id: any) {
        return <View to={`/report-total-order/${id}`} />;
    }

    const columns = [
        {
            width: 60,
            dataIndex: 'idx',
            id: 'idx',
            title: 'ID',
            className: 'center',
        },
        {
            width: 250,
            dataIndex: ['orderDetail', 'createdAt'],
            title: 'Order date',
            id: 'orderDate',
            render: date,
        },
        {
            width: 150,
            dataIndex: 'orderTime',
            title: 'Order time',
            id: 'orderTime',
            render: dateNow,
        },
        {
            width: 180,
            dataIndex: 'orderStatus',
            title: 'Order status',
            id: 'orderStatus',
            filterMultiple: false,
            filters: [
                { text: 'PENDING', value: 'PENDING' },
                { text: 'DRIVER_ACCEPTED', value: 'DRIVER_ACCEPTED' },
                { text: 'DRIVER_REJECTED', value: 'DRIVER_REJECTED' },
                { text: 'RIDER_CANCEL_ORDER', value: 'RIDER_CANCEL_ORDER' },
                { text: 'COMPLETED', value: 'COMPLETED' },
                { text: 'TIMEOUT', value: 'TIMEOUT' },
            ],
            render: (item: any) => status(item, 'blue'),
        },
        {
            width: 180,
            dataIndex: 'tripStatus',
            title: 'Trip status',
            id: 'tripStatus',
            filterMultiple: false,
            filters: [
                { text: 'ON_PICKUP', value: 'ON_PICKUP' },
                { text: 'START_TRIP', value: 'START_TRIP' },
                { text: 'END_TRIP', value: 'END_TRIP' },
                { text: 'RIDER_CANCEL_TRIP', value: 'RIDER_CANCEL_TRIP' },
                { text: 'DRIVER_CANCEL_TRIP', value: 'DRIVER_CANCEL_TRIP' },
                { text: 'PAYMENT', value: 'PAYMENT' },
            ],
            render: (item: any) => status(item, 'geekblue'),
        },
        {
            width: 150,
            dataIndex: ['driver', 'fullName'],
            title: 'Driver name',
            id: 'driverName',
            render: (item: string) => item || '--',
        },
        {
            width: 150,
            dataIndex: ['driver', 'mobileNumber'],
            title: 'Driver mobile',
            id: 'driverMobile',
            render: (item: string) => item || '--',
        },
        {
            width: 150,
            dataIndex: ['rider', 'fullName'],
            title: 'Rider name',
            id: 'riderName',
            render: (item: string) => item || '--',
        },
        {
            width: 150,
            dataIndex: ['rider', 'mobileNumber'],
            title: 'Rider mobile',
            id: 'riderMobile',
            render: (item: string) => item || '--',
        },
        {
            width: 150,
            dataIndex: ['orderDetail', 'estimatedDistance'],
            title: 'Estimated distance',
            id: 'estimatedDistance',
            render: (item: string) => (parseFloat(item) / 1000).toFixed(2) + ' km',
        },
        {
            width: 150,
            dataIndex: ['orderDetail', 'estimatedDuration'],
            title: 'Estimated duration',
            id: 'estimatedDuration',
            render: (item: any) => Math.ceil(item / 60) + ' mn' || 0 + ' mn',
        },
        {
            width: 200,
            dataIndex: ['orderDetail', 'pickupAddressName'],
            title: 'Pickup address',
            id: 'pickupAddressName',
            render: viewOnMap,
        },
        {
            width: 200,
            dataIndex: ['orderDetail', 'dropoffAddressName'],
            title: 'Dropoff address',
            id: 'dropoffAddressName',
            render: viewOnMap,
        },
        {
            width: 150,
            dataIndex: ['orderDetail', 'totalDistance'],
            title: 'Total distance',
            id: 'totalDistance',
            render: (item: any) => (parseFloat(item) / 1000).toFixed(2) + ' km',
        },
        {
            width: 150,
            dataIndex: ['orderDetail', 'totalDuration'],
            title: 'Total duration',
            id: 'totalDuration',
            render: (item: any) => Math.ceil(item / 60) + ' mn' || 0 + ' mn',
        },
        {
            width: 150,
            dataIndex: ['orderDetail', 'discountAmount'],
            className: 'right',
            title: 'Discount Amount',
            id: 'discountAmount',
            render: function currency(item: number) {
                return <Currency value={item} type="KHR" />;
            },
        },
        {
            width: 150,
            dataIndex: ['orderDetail', 'collectionAmount'],
            className: 'right',
            title: 'Amount',
            id: 'collectionAmount',
            render: function currency(item: number) {
                return <Currency value={item} type="KHR" />;
            },
        },
        {
            fixed: 'right',
            className: 'center',
            width: 100,
            dataIndex: 'id',
            id: 'id',
            title: 'Action',
            render: act,
        },
    ];

    return { columns };
}

export const groupColumn = [
    {
        groupTitle: 'Driver Info',
        group: [
            { title: '#', dataIndex: 'idx' },
            { title: 'Driver Name', dataIndex: 'driverName' },
            { title: 'Order status', dataIndex: 'orderStatus' },
            { title: 'Trip status', dataIndex: 'tripStatus' },
            { title: 'Driver mobileNumber', dataIndex: 'driverMobile' },
        ],
    },
    {
        groupTitle: 'Rider Info',
        group: [
            { title: 'Rider Name', dataIndex: 'riderName' },
            { title: 'Rider mobile', dataIndex: 'riderMobile' },
        ],
    },
    {
        groupTitle: 'Order Detail',
        group: [
            { title: 'Order Date', dataIndex: 'orderDate' },
            { title: 'Order Time', dataIndex: 'orderTime' },
            { title: 'Estimated distance', dataIndex: 'estimatedDistance' },
            { title: 'Estimated duration', dataIndex: 'estimatedDuration' },
            { title: 'Pickup address', dataIndex: 'pickupAddressName' },
            { title: 'Dropoff address', dataIndex: 'dropoffAddressName' },
            { title: 'Total distance', dataIndex: 'totalDistance' },
            { title: 'Total duration', dataIndex: 'totalDuration' },
            { title: 'Discount Amount', dataIndex: 'discountAmount' },
            { title: 'Amount', dataIndex: 'collectionAmount' },
        ],
    },
    {
        groupTitle: 'Action',
        group: [
            {
                title: 'Action',
                dataIndex: 'id',
            },
        ],
    },
];
