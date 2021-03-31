import React from 'react';
import { PropRoute } from 'util/interface';
// ============================================================================ COMPONENT ::
const Dashboard = React.lazy(() => import('containers/Dashboard'));

// ============================================================================ ROUTE ::

const route: PropRoute[] = [
    {
        id: 'dashboard',
        path: '/dashboard',
        exact: true,
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        id: 'dashboard1',
        path: '/dashboard1',
        exact: true,
        name: 'Dashboard',
        component: Dashboard,
    },
];

export default route;
