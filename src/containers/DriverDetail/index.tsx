import React from 'react';
import { Card, Row, Col, Tabs } from 'antd';
import { FolderOpenOutlined, FileSearchOutlined } from '@ant-design/icons';

import Profile from './components/Profile';
import HeaderButton from './components/HeaderButton';
import PersonalInformation from './components/PersonalInformation';
import VehicleInformation from './components/VehicleInformation';
import Document from './components/Document';
import TripHistory from './components/TripHistory';
import { useGetDriverDetail } from './api';

const { TabPane } = Tabs;
const Index: React.FC = () => {
    const {
        loading,
        driverDetail,
        requestWithDraw,
        totalBalance,
        OnlineDriver,
        verifyLoading,
        updateDriver,
        vehicleModel,
        vehicleRecords,
        verifyDriver,
    } = useGetDriverDetail();
    return (
        <Card loading={loading}>
            <HeaderButton
                requestWithDraw={requestWithDraw}
                driverDetail={driverDetail}
                verifyDriver={verifyDriver}
                verifyLoading={verifyLoading}
            />
            <Profile
                driverDetail={driverDetail}
                vehicleRecords={vehicleRecords}
                totalBalance={totalBalance}
                OnlineDriver={OnlineDriver}
            />
            <Row gutter={[36, 36]} style={{ marginTop: 10 }}>
                <Col xl={6} lg={8} md={12} sm={24}>
                    <PersonalInformation updateDriver={updateDriver} driverDetail={driverDetail} />
                    <VehicleInformation
                        vehicleModel={vehicleModel}
                        updateDriver={updateDriver}
                        driverDetail={driverDetail}
                    />
                </Col>
                <Col xl={18} lg={16} md={12} sm={24}>
                    <Tabs defaultActiveKey="document">
                        <TabPane
                            tab={
                                <span>
                                    <FolderOpenOutlined />
                                    Document
                                </span>
                            }
                            key="document"
                        >
                            <Document driverDetail={driverDetail} />
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <FileSearchOutlined />
                                    Trip History
                                </span>
                            }
                            key="trip"
                        >
                            <TripHistory />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </Card>
    );
};

export default Index;
