import React from 'react';
import {
    SettingFilled,
    CarOutlined,
    TeamOutlined,
    CompassOutlined,
    NotificationOutlined,
    DoubleRightOutlined,
    StarOutlined,
    FormOutlined,
    DollarCircleOutlined,
    BellOutlined,
    BgColorsOutlined,
    FrownOutlined,
    ApartmentOutlined,
    FundViewOutlined,
    CreditCardOutlined,
    MobileOutlined,
    WalletOutlined,
    AppstoreAddOutlined,
    BarcodeOutlined,
} from '@ant-design/icons';
import { NavProps } from 'util/interface';

const nav: Array<NavProps> = [
    // {
    //     order: 1,
    //     path: '/dashboard',
    //     name: 'Dashboard',
    //     icon: <DashboardOutlined />,
    // },
    {
        id: 'WEB:RIDER:READ',
        order: 2,
        path: '/rider',
        name: 'Rider',
        icon: <TeamOutlined />,
    },
    {
        id: 'WEB:DRIVER:READ',
        order: 3,
        path: '/driver',
        name: 'Driver',
        icon: <CarOutlined />,
    },
    {
        id: 'WEB:GROUP:READ',
        order: 4,
        path: '/group',
        name: 'Driver Group',
        icon: <AppstoreAddOutlined />,
    },
    {
        id: 'WEB:REFERRAL:READ',
        order: 5,
        path: '/referral',
        name: 'Referral',
        icon: <ApartmentOutlined />,
    },
    {
        id: 'WEB:LOCATION:READ',
        order: 6,
        path: '/location-driver',
        name: 'Driver Location',
        icon: <CompassOutlined />,
    },
    {
        id: 'WEB:RATING:READ',
        order: 7,
        path: '/rating',
        name: 'Rating',
        icon: <StarOutlined />,
    },
    {
        allow: true,
        order: 6,
        path: '/promotion',
        name: 'Promotion',
        icon: <NotificationOutlined />,
        children: [
            {
                id: 'WEB:PROMOTION:READ',
                order: 1,
                path: '/promotion-promotion',
                name: 'Promotion',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 'WEB:COUPON:READ',
                order: 2,
                path: '/promotion-coupon',
                name: 'Coupon',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 'WEB:GENERATED_COUPON:READ',
                order: 3,
                path: '/promotion-generated-coupon',
                name: 'Coupon Generated',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 'WEB:REFERRAL_PROMOTION:READ',
                order: 4,
                path: '/promotion-referral',
                name: 'Referral',
                icon: <DoubleRightOutlined />,
            },
        ],
    },
    {
        allow: true,
        order: 8,
        path: '/wallet',
        name: 'Wallet',
        icon: <WalletOutlined />,
        children: [
            {
                id: 'WEB:WALLET_PROMOTION:READ',
                order: 1,
                path: '/wallet-promotion',
                name: 'Wallet Promotion',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 'WEB:WALLET_WITHDRAW:READ',
                order: 2,
                path: '/wallet-withdwraw',
                name: 'Wallet Withdraw',
                icon: <DoubleRightOutlined />,
            },
        ],
    },
    {
        allow: true,
        order: 9,
        path: '/report',
        name: 'Report',
        icon: <FundViewOutlined />,
        children: [
            {
                id: 'WEB:ORDER_REASON:READ',
                order: 1,
                path: '/report-total-order',
                name: 'Total Order',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 'WEB:PAYMENT:READ',
                order: 2,
                path: '/report-payment',
                name: 'Payment',
                icon: <DoubleRightOutlined />,
            },
            {
                id: 'WEB:ACTIVITY:READ',
                order: 3,
                path: '/report-activity',
                name: 'Activity',
                icon: <DoubleRightOutlined />,
            },
        ],
    },
    {
        allow: true,
        order: 10,
        path: '/setting',
        name: 'Setting',
        icon: <SettingFilled />,
        children: [
            {
                id: 'WEB:VEHICLE:READ',
                order: 1,
                path: '/setting-vehicle',
                name: 'Vehicle',
                icon: <CarOutlined />,
            },
            {
                id: 'WEB:CANCEL_REASON:READ',
                order: 2,
                path: '/setting-cancel-reason',
                name: 'Cancel Reason',
                icon: <FormOutlined />,
            },
            {
                id: 'WEB:CURRENCY:READ',
                order: 3,
                path: '/setting-Currency',
                name: 'Currency',
                icon: <DollarCircleOutlined />,
            },
            {
                id: 'WEB:PAYMENT_TYPE:READ',
                order: 4,
                path: '/setting-payment-method',
                name: 'Payment Method',
                icon: <CreditCardOutlined />,
            },
            {
                id: 'WEB:COLOR:READ',
                order: 5,
                path: '/setting-color',
                name: 'Color',
                icon: <BgColorsOutlined />,
            },
            {
                id: 'WEB:FEEDBACK:READ',
                order: 6,
                path: '/setting-feedback-category',
                name: 'Feedback Category',
                icon: <FrownOutlined />,
            },
            {
                id: 'WEB:STORE_CONTROL:READ',
                order: 7,
                path: '/setting-store-control',
                name: 'Store Control',
                icon: <MobileOutlined />,
            },
            {
                id: 'WEB:REFERRAL_SETTING:READ',
                order: 8,
                path: '/setting-referral-setting',
                name: 'Referral',
                icon: <ApartmentOutlined />,
            },
            {
                id: 'WEB:COMMISSION:READ',
                order: 9,
                path: '/setting-commission-charge',
                name: 'Commission Charge',
                icon: <DollarCircleOutlined />,
            },
            {
                id: 'WEB:ADMIN_CONFIG:READ',
                order: 9,
                path: '/setting-admin-config',
                name: 'Admin Config',
                icon: <BarcodeOutlined />,
            },
        ],
    },
    {
        id: 'WEB:NOTIFICATION:READ',
        order: 12,
        path: '/notification',
        name: 'Notification',
        icon: <BellOutlined />,
    },
];

export default nav;
