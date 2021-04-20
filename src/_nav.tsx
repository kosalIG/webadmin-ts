import React from 'react';
import { DashboardOutlined } from '@ant-design/icons';
import { NavProps } from 'util/interface';

const nav: Array<NavProps> = [
    {
        id: 1,
        path: '/dashboard',
        name: 'Dashboard',
        icon: <DashboardOutlined />,
    },
    {
        id: 1,
        path: '/dashboards',
        name: 'Dashboard',
        icon: <DashboardOutlined />,
    },
];

export default nav;
