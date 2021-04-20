import React from 'react';
import { Card, Row, Col } from 'antd';
import FeedbackUI from './FeedbackUI';
import { FeedbackUI as FeedbackProps } from '../../interface';

const Index: React.FC<{ feedbackList: FeedbackProps[]; loading?: boolean }> = ({ feedbackList, loading }) => {
    return (
        <Card loading={loading} title="User Feedback" type="inner">
            <Row gutter={[12, 12]}>
                {feedbackList?.slice(0, 10).map((item, idx) => (
                    <Col key={idx + 1} lg={12} md={24} xs={24}>
                        <FeedbackUI item={item} />
                    </Col>
                ))}
            </Row>
        </Card>
    );
};

export default Index;
