import React from 'react';
import { Row, Col } from 'antd';
import FooterCard from './FooterCard';
import { FooterProps } from '../../interface';

const Footer: React.FC<FooterProps> = ({
    driverEndedTrip,
    driverRejectedOrder,
    driverMissedOrder,
    riderCancelledOrder,
    riderCancelledTrip,
    riderMissedOrder,
    totalValue,
}) => {
    function returnRate(total: number) {
        return (total * 100) / totalValue;
    }

    return (
        <Row style={{ padding: `0 5px` }} gutter={[12, 12]}>
            <Col lg={4}>
                <FooterCard
                    title="Driver end trip"
                    background="success"
                    vatValue={returnRate(driverEndedTrip?.totalValue)}
                    value={driverEndedTrip?.totalValue}
                />
            </Col>
            <Col lg={4}>
                <FooterCard
                    title="Driver rejected orders"
                    background="danger"
                    vatValue={returnRate(driverRejectedOrder?.totalValue)}
                    value={driverRejectedOrder?.totalValue}
                />
            </Col>
            <Col lg={4}>
                <FooterCard
                    title="Driver missed orders"
                    background="warning"
                    vatValue={returnRate(driverMissedOrder?.totalValue)}
                    value={driverMissedOrder?.totalValue}
                />
            </Col>
            <Col lg={4}>
                <FooterCard
                    title="Rider canceled orders"
                    background="default"
                    vatValue={returnRate(riderCancelledOrder?.totalValue)}
                    value={riderCancelledOrder?.totalValue}
                />
            </Col>
            <Col lg={4}>
                <FooterCard
                    title="Rider canceled trips"
                    vatValue={returnRate(riderCancelledTrip?.totalValue)}
                    value={riderCancelledTrip?.totalValue}
                />
            </Col>
            <Col lg={4}>
                <FooterCard
                    title="Rider missed orders"
                    background="info"
                    vatValue={returnRate(riderMissedOrder?.totalValue)}
                    value={riderMissedOrder?.totalValue}
                />
            </Col>
        </Row>
    );
};

export default Footer;
