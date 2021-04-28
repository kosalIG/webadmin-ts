import React from 'react';
import { Row, Col } from 'antd';
import Avatar from './Avatar';
import DriverInfo from './DriverInfo';

const Index: React.FC = () => {
    return (
        <Row gutter={[32, 16]}>
            <Col xl={6} lg={8} md={12} sm={24}>
                <Avatar />
            </Col>
            <Col xl={18} lg={16} md={12} sm={24}>
                <DriverInfo />
            </Col>
        </Row>
    );
};

export default Index;
