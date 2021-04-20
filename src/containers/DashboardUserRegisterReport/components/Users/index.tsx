import React from 'react';
import { Row, Col } from 'antd';
import { LineOption } from '../../interface';
import LineChart from './LineChart';
import TopUser from './TopUser';

const Index: React.FC<LineOption> = ({ lineData, lineLabel, lineText, maxValue }) => {
    return (
        <Row>
            <Col xl={16} lg={24} md={24} xs={24}>
                <LineChart lineData={lineData} lineLabel={lineLabel} lineText={lineText} maxValue={maxValue} />
            </Col>
            <Col xl={8} lg={24} md={24} xs={24}>
                <h3>Top Register {lineText}</h3>
                <TopUser lineText={lineText} records={lineData} />
            </Col>
        </Row>
    );
};

export default Index;
