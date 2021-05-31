import React from 'react';
import {
    DashboardOutlined,
    TeamOutlined,
    CarOutlined,
    AppstoreAddOutlined,
    ApartmentOutlined,
    CompassOutlined,
    StarOutlined,
    NotificationOutlined,
    DoubleRightOutlined,
    WalletOutlined,
    FundViewOutlined,
} from '@ant-design/icons';
import { NavProps } from 'util/interface';

const nav: Array<NavProps> = [
    {
        id: 1,
        path: '/dashboard',
        name: 'Dashboard',
        icon: <DashboardOutlined />,
    },
    {
        id: 2,
        path: '/rider',
        name: 'Rider',
        icon: <TeamOutlined />,
    },
    {
        id: 3,
        path: '/driver',
        name: 'Driver',
        icon: <CarOutlined />,
    },
    {
        id: 4,
        path: '/group',
        name: 'Driver Group',
        icon: <AppstoreAddOutlined />,
    },
    {
        id: 5,
        path: '/referral',
        name: 'Referral',
        icon: <ApartmentOutlined />,
    },
    {
        id: 6,
        path: '/location-driver',
        name: 'Driver Location',
        icon: <CompassOutlined />,
    },
    {
        id: 7,
        path: '/rating',
        name: 'Rating',
        icon: <StarOutlined />,
    },
    {
        id: 8,
        path: '/promotion',
        name: 'Promotion',
        icon: <NotificationOutlined />,
        children: [
            {
                id: 1,
                path: '/promotion/promotion',
                name: 'Promotion',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 2,
                path: '/promotion/coupon',
                name: 'Coupon',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 3,
                path: '/promotion/generated-coupon',
                name: 'Coupon Generated',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 4,
                path: '/promotion/referral',
                name: 'Referral',
                icon: <DoubleRightOutlined />,
            },
        ],
    },
    {
        id: 9,
        path: '/wallet',
        name: 'Wallet',
        icon: <WalletOutlined />,
        children: [
            {
                id: 1,
                path: '/wallet/promotion',
                name: 'Wallet Promotion',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 2,
                path: '/wallet/withdwraw',
                name: 'Wallet Withdraw',
                icon: <DoubleRightOutlined />,
            },
        ],
    },
    {
        id: 10,
        path: '/report',
        name: 'Report',
        icon: <FundViewOutlined />,
        children: [
            {
                id: 1,
                path: '/report/total-order',
                name: 'Total Order',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 2,
                path: '/report/payment',
                name: 'Payment',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 3,
                path: '/report/activity',
                name: 'Activity',
                icon: <DoubleRightOutlined />,
            },
        ],
    },
    {
        id: 11,
        path: '/setting',
        name: 'Setting',
        icon: <FundViewOutlined />,
        children: [
            {
                id: 1,
                path: '/setting/vehicle',
                name: 'Vehicle',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 2,
                path: '/setting/cancel-reason',
                name: 'Cancel Reason',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 3,
                path: '/setting/Currency',
                name: 'Currency',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 4,
                path: '/setting/payment-method',
                name: 'Payment Method',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 5,
                path: '/setting/color',
                name: 'Color',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 6,
                path: '/setting/feedback-category',
                name: 'Feedback Category',
                icon: <DoubleRightOutlined />,
            },
        ],
    },
];

export default nav;
