import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import CancelTrip from './components/CancelTrip';
import UserDetail from './components/UserDetail';
import Map from './components/Map';
import { useGetlist } from './api';

const Index: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { goBack } = useHistory();
    const { getOrder, loading, vehicleIcon } = useGetlist(id);
    return (
        <Card title="Pickup Driver - Detail" type="inner" loading={loading}>
            <Row style={{ marginBottom: 15 }} justify="space-between">
                <Col>
                    <Button onClick={goBack}>Back</Button>
                </Col>
                <Col>
                    <CancelTrip
                        cancelTripParams={{
                            driverId: getOrder?.driver?.id,
                            userId: getOrder?.rider?.id,
                            orderId: getOrder?.id,
                        }}
                    />
                </Col>
            </Row>
            <Row gutter={[14, 0]}>
                <Col xl={16} lg={14} sm={24} xs={24}>
                    <Map
                        vehicleIcon={vehicleIcon}
                        orderDetail={getOrder?.orderDetail}
                        orderDropoffs={getOrder?.orderDropoffs}
                    />
                </Col>
                <Col xl={8} lg={10} sm={24} xs={24}>
                    <UserDetail {...getOrder} />
                </Col>
            </Row>
        </Card>
    );
};

export default Index;
