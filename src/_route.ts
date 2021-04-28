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
];

export default route;
