import React from 'react';
import { useQuery } from '@apollo/client';
import { Row, Col } from 'antd';
import { serviceOrder, serviceFeedback } from 'env';
import { GET_PAYMENT_DASHBOARD, GET_ORDER_DASHBOARD, RATING_DASHBOARD, useGetTotalDriver } from './api';

import UserRegisterReport from 'containers/DashboardUserRegisterReport';
import DriverCard from './components/DriverCard';
import TotalOrderReport from './components/TotalOrderReport';
import TopDriver from './components/TopDriver';
import RatingStar from './components/RatingStar';
import InactiveDriver from './components/InactiveDriver';
import RegisterUser from './components/RegisterUserOnDoughnut';
import UserFeedback from './components/UserFeedback';
import Breadcrumbs from 'components/Breadcrumbs';

const Index: React.FC = () => {
    const { data } = useQuery(GET_PAYMENT_DASHBOARD);
    const { getPaymentDashboard } = data || {};

    const { data: order } = useQuery(GET_ORDER_DASHBOARD, { client: serviceOrder });
    const { getOrderDashboard } = order || {};

    const { totalAvailableDriver, totalDriver, totalRegisterUser } = useGetTotalDriver();

    const { data: feedbackData, loading } = useQuery(RATING_DASHBOARD, {
        client: serviceFeedback,
    });
    const { getRatingFeedbackDashboard } = feedbackData || {};
    const { ratingList, feedbackList } = getRatingFeedbackDashboard || {};

    return (
        <Row gutter={[12, 12]}>
            <Breadcrumbs propRoutes={['dashboard']} />
            <Col lg={24} md={24} xs={24}>
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
            <Col lg={24} md={24} xs={24}>
                <TotalOrderReport totalOrderReport={getOrderDashboard?.totalOrderReport} />
            </Col>
            <Col lg={24} md={24} xs={24}>
                <UserRegisterReport />
            </Col>
            <Col lg={16} md={24} xs={24}>
                <TopDriver />
            </Col>
            <Col lg={8} md={24} xs={24}>
                <RatingStar records={ratingList} loading={loading} />
            </Col>
            <Col lg={16} md={24} xs={24}>
                <InactiveDriver records={getOrderDashboard?.inactiveDrivers} />
            </Col>
            <Col lg={8} md={24} xs={24}>
                <RegisterUser totalRegisterUser={totalRegisterUser} />
            </Col>
            <Col lg={24} md={24} xs={24}>
                <UserFeedback loading={loading} feedbackList={feedbackList} />
            </Col>
        </Row>
    );
};

export default Index;
