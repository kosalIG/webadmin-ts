import React from 'react';
import { Card, Row, Col } from 'antd';
import Profile from './components/Profile';
import HeaderButton from './components/HeaderButton';
import PersonalInformation from './components/PersonalInformation';
import VehicleInformation from './components/VehicleInformation';
const Index: React.FC = () => {
    return (
        <Card>
            <HeaderButton />
            <Profile />
            <Row gutter={[16, 36]} style={{ marginTop: 10 }}>
                <Col xl={6} lg={8} md={12} sm={24}>
                    <PersonalInformation />
                    <VehicleInformation />
                </Col>
                <Col xl={18} lg={16} md={12} sm={24}>
                    Hello
                </Col>
            </Row>
        </Card>
    );
};

export default Index;
