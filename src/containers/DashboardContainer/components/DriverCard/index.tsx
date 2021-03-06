import React from 'react';
import { Row } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { EyeOutlined } from '@ant-design/icons';
import DriverCardUI from './DriverCardUI';
import { DashboardCard } from '../../interface';
import { useAppConsummer } from 'util/appContext';

const Links = styled(Link)`
    color: white;
    &: hover {
        color: #c8ced3;
    }
`;

const EyeOutlineds = styled(EyeOutlined)`
    margin-right: 5px;
    font-size: 18px;
`;

const Index: React.FC<DashboardCard> = ({
    totalOnlineDrivers,
    totalActiveDrivers,
    totalOnPickupDrivers,
    totalOnTransitDrivers,
    totalTransaction,
    totalIncome,
    totalAvailableDriver,
    totalDriver,
}) => {
    const { user } = useAppConsummer();
    const cancel = user?.permissions.find((p) => p === 'WEB:TRANSPORT_DRIVER:CANCEL_TRIP');
    const finish = user?.permissions.find((p) => p === 'WEB:TRANSPORT_DRIVER:FINISH_TRIP');

    return (
        <Row gutter={[12, 12]}>
            <DriverCardUI
                topText="Online Drivers"
                bottomText="Total Online Drivers"
                contentText={totalOnlineDrivers || 0}
            />
            <DriverCardUI
                background="success"
                topText="Active Drivers"
                bottomText="Total Active Drivers"
                contentText={totalActiveDrivers || 0}
            />
            <DriverCardUI
                background="warning"
                topText={
                    cancel ? (
                        <Links to="/dashboard/pickup-driver">
                            <EyeOutlineds />
                            View detail
                        </Links>
                    ) : (
                        'Pickup Drivers'
                    )
                }
                bottomText="Total Pickup Drivers"
                contentText={totalOnPickupDrivers || 0}
            />
            <DriverCardUI
                background="danger"
                topText={
                    finish ? (
                        <Links to="/dashboard/transport-driver">
                            <EyeOutlineds />
                            View detail
                        </Links>
                    ) : (
                        'Transporting Drivers'
                    )
                }
                bottomText="Total Transporting Drivers"
                contentText={totalOnTransitDrivers || 0}
            />
            <DriverCardUI
                background="warning"
                topText="Transactions"
                bottomText="Total Transactions"
                contentText={totalTransaction || 0}
            />
            <DriverCardUI
                background="danger"
                topText="Drivers Earning"
                bottomText="Total Drivers Earning"
                contentText={totalIncome || 0}
            />
            <DriverCardUI
                topText="Available Drivers"
                bottomText="Total Available Drivers"
                contentText={totalAvailableDriver || 0}
            />
            <DriverCardUI
                background="success"
                topText="Total Drivers"
                bottomText="Total Drivers"
                contentText={totalDriver || 0}
            />
        </Row>
    );
};

export default Index;
