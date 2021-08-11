import React from 'react';
import { Table, Card, Col, Row } from 'antd';
import { useGetList } from './api';
import useColumn from './useColumn';
import RiderText from './components/RiderText';
import Breadcrumbs from 'components/Breadcrumbs';

const Index: React.FC = () => {
    const { dataObj, loading } = useGetList();
    const { rider, vehicleTypeInfo, orderLogs } = dataObj || {};
    const { columns } = useColumn();

    return (
        <Card title="Total Order Detail" type="inner">
            <Breadcrumbs propRoutes={['WEB:ORDER_REASON:READ', 'WEB:ORDER_REASON:READ_DETAIL']} />

            <Col span={8} style={{ marginBottom: 10 }}>
                <Row justify="space-between" gutter={[12, 12]}>
                    <RiderText label="Full Name" text={rider?.fullName} />
                    <RiderText label="Gender" text={rider?.gender} />
                    <RiderText label="Mobile" text={rider?.mobileNumber} />
                    <RiderText label="Vehicle Type" text={vehicleTypeInfo?.name} />
                </Row>
            </Col>
            <Table
                size="middle"
                pagination={false}
                bordered
                dataSource={orderLogs?.map((ord: any, idx: number) => ({ ...ord, idx: idx + 1 }))}
                loading={loading}
                columns={columns}
            />
        </Card>
    );
};

export default Index;
