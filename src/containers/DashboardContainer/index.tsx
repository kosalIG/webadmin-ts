import React from 'react';
import DriverCard from './components/DriverCard';
import { useQuery } from '@apollo/client';
import { Row, Col } from 'antd';
import { serviceOrder } from 'env';
import { GET_PAYMENT_DASHBOARD, GET_ORDER_DASHBOARD, useGetTotalDriver } from './api';
import TotalOrderReport from './components/TotalOrderReport';

const Index: React.FC = () => {
    const { data } = useQuery(GET_PAYMENT_DASHBOARD);
    const { getPaymentDashboard } = data || {};

    const { data: order } = useQuery(GET_ORDER_DASHBOARD, { client: serviceOrder });
    const { getOrderDashboard } = order || {};
    console.log(getOrderDashboard);
    const { totalAvailableDriver, totalDriver } = useGetTotalDriver();

    return (
        <Row gutter={[12, 12]}>
            <Col lg={24}>
                <DriverCard
                    totalOnlineDrivers={getOrderDashboard?.totalOnlineDrivers}
                    totalActiveDrivers={getOrderDashboard?.totalActiveDrivers}
                    totalOnPickupDrivers={getOrderDashboard?.totalOnPickupDrivers}
                    totalOnTransitDrivers={getOrderDashboard?.totalOnTransitDrivers}
                    totalTransaction={getPaymentDashboard?.totalTransaction}
                    totalIncome={getPaymentDashboard?.totalIncome}
                    totalAvailableDriver={totalAvailableDriver}
                    totalDriver={totalDriver}
                />
            </Col>
            <Col lg={24}>
                <TotalOrderReport totalOrderReport={getOrderDashboard?.totalOrderReport} />
            </Col>
        </Row>
    );
};

export default Index;
