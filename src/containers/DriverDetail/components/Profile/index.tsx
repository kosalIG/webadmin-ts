import React from 'react';
import { Row, Col } from 'antd';
import Avatar from './Avatar';
import DriverInfo from './DriverInfo';
import { DriverData } from '../../interface';
interface ProfileProps {
    driverDetail: DriverData | null;
    totalBalance: number;
    vehicleRecords: any[];
    OnlineDriver: 'Online' | 'Offline';
}
const Index: React.FC<ProfileProps> = ({ driverDetail, totalBalance, OnlineDriver, vehicleRecords }) => {
    return (
        <Row gutter={[32, 16]}>
            <Col xl={6} lg={8} md={12} sm={24}>
                <Avatar avatar={driverDetail?.avatar} />
            </Col>
            <Col xl={18} lg={16} md={12} sm={24}>
                <DriverInfo
                    vehicleRecords={vehicleRecords}
                    OnlineDriver={OnlineDriver}
                    totalBalance={totalBalance}
                    driverDetail={driverDetail}
                />
            </Col>
        </Row>
    );
};

export default Index;
