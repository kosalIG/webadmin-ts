import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col, Typography, Avatar } from 'antd';
import { useQuery } from '@apollo/client';
import { UserOutlined, PhoneOutlined, MailOutlined, HistoryOutlined } from '@ant-design/icons';

import TripHistory from './components/TripHistory';
import { useGetRiderDetail, GET_TRIP_HISTORY } from './api';
import Breadcrumbs from 'components/Breadcrumbs';

const { Title, Text } = Typography;

const Index: React.FC = () => {
    const { id } = useParams<{ id: string }>() || {};
    const { data, loading } = useGetRiderDetail(id);

    const { data: tripHistory, loading: tripLoading, refetch } = useQuery(GET_TRIP_HISTORY, {
        variables: { customerID: id, limit: 10, offset: 0 },
    });

    const { getPaymentTransactionHistories } = tripHistory || {};
    const { data: records, metadata } = getPaymentTransactionHistories || {};

    return (
        <Card loading={loading} title="Rider Detail" type="inner">
            <Breadcrumbs propRoutes={['WEB:RIDER:READ', 'WEB:RIDER:READ_DETAIL']} />
            <Row gutter={[12, 18]}>
                <Col flex="150px">
                    <Avatar icon={<UserOutlined />} size={140} src={''} style={{ width: `100%` }} />
                </Col>
                <Col flex="auto">
                    <Title level={4}>{data?.fullName || 'n/a'}</Title>
                    <div>
                        <Text style={{ marginRight: 10 }}>
                            <PhoneOutlined />
                        </Text>
                        <Text>{data?.mobileNumber || 'n/a'}</Text>
                    </div>
                    <div>
                        <Text style={{ marginRight: 10 }}>
                            <MailOutlined />
                        </Text>
                        <Text>{data?.email || 'n/a'}</Text>
                    </div>
                </Col>
            </Row>
            <div style={{ marginTop: 20, marginBottom: 15 }}>
                <strong>
                    <HistoryOutlined /> Trip history
                </strong>
            </div>
            <TripHistory
                records={records}
                loading={tripLoading}
                metadata={metadata}
                refetch={(limit, offset) => refetch({ customerID: id, limit, offset })}
            />
        </Card>
    );
};

export default Index;
