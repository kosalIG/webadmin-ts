import React from 'react';
import { Card, Row, Col } from 'antd';
import InactiveUI from './InactiveUI';
import { InactiveProps } from '../../interface';

const Index: React.FC<InactiveProps> = ({ records }) => {
    return (
        <Card title="Last Inactive Driver" type="inner" hoverable style={{ cursor: 'default' }}>
            <Row gutter={[8, 16]}>
                {records?.length ? (
                    records
                        .filter((item) => item.driver)
                        .slice(0, 8)
                        .map((item) => (
                            <Col key={Math.random()} xs={12} sm={8} md={8} lg={8} xl={6}>
                                <InactiveUI
                                    avatar={item?.driver?.avatar}
                                    fullName={item?.driver?.fullName}
                                    mobileNumber={item?.driver?.mobileNumber}
                                    inactiveAt={item?.inactiveAt}
                                />
                            </Col>
                        ))
                ) : (
                    <div>no data</div>
                )}
            </Row>
        </Card>
    );
};

export default Index;
