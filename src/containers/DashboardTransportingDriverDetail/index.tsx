import React, { useEffect } from 'react';
import { Card, Row, Col, Button, Divider, Popconfirm } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import CancelTrip from './components/CancelTrip';
import UserDetail from './components/UserDetail';
import Map from './components/Map';
import { useGetlist, useFinishTrip } from './api';
import { useAppConsummer } from 'util/appContext';
import Breadcrumbs from 'components/Breadcrumbs';

const Index: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const { goBack } = useHistory();
    const { getOrder, loading, vehicleIcon } = useGetlist(id);
    const { finishTripBySystem, loading: fLoading, data } = useFinishTrip();

    useEffect(() => {
        if (data) {
            goBack();
        }
    }, [data]);

    const { user } = useAppConsummer();
    const cancel = user?.permissions.find((p) => p === 'WEB:TRANSPORT_DRIVER:CANCEL_TRIP');
    const finish = user?.permissions.find((p) => p === 'WEB:TRANSPORT_DRIVER:FINISH_TRIP');

    return (
        <Card title="Transporting - Detail" type="inner" loading={loading}>
            <Breadcrumbs propRoutes={['dashboard', 'WEB:TRANSPORT_DRIVER:READ', 'WEB:TRANSPORT_DRIVER:READ_DETAIL']} />

            <Row style={{ marginBottom: 15 }} justify="space-between">
                <Col>
                    <Button onClick={goBack}>Back</Button>
                </Col>
                <Col>
                    <Row>
                        {cancel && (
                            <>
                                <CancelTrip
                                    cancelTripParams={{
                                        driverId: getOrder?.driver?.id,
                                        userId: getOrder?.rider?.id,
                                        orderId: id,
                                    }}
                                />
                                <Divider type="vertical" style={{ marginTop: 10 }} />
                            </>
                        )}

                        {finish && (
                            <Popconfirm
                                placement="leftTop"
                                title="Are you sure want to finish trip?"
                                onConfirm={() =>
                                    finishTripBySystem({
                                        variables: {
                                            input: {
                                                orderId: id,
                                                userId: getOrder?.rider?.id,
                                                driverId: getOrder?.driver?.id,
                                            },
                                        },
                                    })
                                }
                            >
                                <Button loading={fLoading} size="middle" type="primary">
                                    Finish Trip
                                </Button>
                            </Popconfirm>
                        )}
                    </Row>
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
