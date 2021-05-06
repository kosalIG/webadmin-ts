import React from 'react';
import { PropRoute } from 'util/interface';
// ============================================================================ COMPONENT ::
const DashboardContainer = React.lazy(() => import('containers/DashboardContainer'));
const DashboardPickupDriver = React.lazy(() => import('containers/DashboardPickupDriver'));
const DashboardTransportingDriver = React.lazy(() => import('containers/DashboardTransportingDriver'));

// RIDER
const RiderContainer = React.lazy(() => import('containers/RiderContainer'));
const RiderDetail = React.lazy(() => import('containers/RiderDetail'));

// DRIVER
const DriverContainer = React.lazy(() => import('containers/DriverContainer'));
const DriverDetail = React.lazy(() => import('containers/DriverDetail'));

// DRIVER GROUP
const GroupDriverContainer = React.lazy(() => import('containers/GroupDriverContainer'));
const GroupDriverDetail = React.lazy(() => import('containers/GroupDriverDetail'));

// ============================================================================ ROUTE ::

const route: PropRoute[] = [
    // Dashboard
    {
        id: 'dashboard',
        path: '/dashboard',
        exact: true,
        name: 'Dashboard',
        component: DashboardContainer,
    },
    {
        id: 'dashboards',
        path: '/',
        exact: true,
        name: 'Dashboard',
        component: DashboardContainer,
    },
    {
        id: 'dashboardPickupDriver',
        path: '/dashboard/pickup-driver',
        exact: true,
        name: 'Pickup Driver',
        component: DashboardPickupDriver,
    },
    {
        id: 'dashboardTransportDriver',
        path: '/dashboard/transport-driver',
        exact: true,
        name: 'Transport Driver',
        component: DashboardTransportingDriver,
    },
    // RIDER
    {
        id: 'riderContainer',
        path: '/rider',
        exact: true,
        name: 'Rider',
        component: RiderContainer,
    },
    {
        id: 'riderDetail',
        path: '/rider/:id',
        exact: true,
        name: 'Rider Detail',
        component: RiderDetail,
    },
    // Driver
    {
        id: 'driver',
        path: '/driver',
        exact: true,
        name: 'Driver',
        component: DriverContainer,
    },
    {
        id: 'driverDetail',
        path: '/driver/:id',
        exact: true,
        name: 'Driver Detail',
        component: DriverDetail,
    },
    // Group Driver
    {
        id: 'driverGroup',
        path: '/group',
        exact: true,
        name: 'Driver Group',
        component: GroupDriverContainer,
    },
    {
        id: 'driverGroupDetail',
        path: '/group/:id',
        exact: true,
        name: 'Driver Detail',
        component: GroupDriverDetail,
    },
];

export default route;
