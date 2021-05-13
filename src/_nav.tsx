import React from 'react';
import {
    DashboardOutlined,
    TeamOutlined,
    CarOutlined,
    AppstoreAddOutlined,
    ApartmentOutlined,
    CompassOutlined,
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
];

export default nav;
