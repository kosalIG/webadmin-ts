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
        id: 2,
        path: '/1',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
        children: [{ id: 2, path: '/child', name: 'Child', icon: <DashboardOutlined /> }],
    },
    {
        id: 3,
        path: '/2',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
    },
    {
        id: 4,
        path: '/3',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
    },
    {
        id: 5,
        path: '/4',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
    },
    {
        id: 6,
        path: '/6',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
    },
    {
        id: 7,
        path: '/7',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
    },
    {
        id: 8,
        path: '/8',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
    },
    {
        id: 9,
        path: '/9',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
    },
    {
        id: 4,
        path: '/3',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
    },
    {
        id: 5,
        path: '/4',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
    },
    {
        id: 6,
        path: '/6',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
    },
    {
        id: 7,
        path: '/7',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
    },
    {
        id: 8,
        path: '/8',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
    },
    {
        id: 9,
        path: '/9',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
    },
];

export default nav;
