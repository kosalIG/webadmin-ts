import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';
const Text = styled.div`
    font-size: 11px;
    font-weight: 500px;
    color: #bfbfbf;
`;
const Value = styled.div`
    font-size: 15px;
    font-weight: 500px;
`;
const RiderText: React.FC<{ label: string; text: string }> = ({ label, text }) => (
    <Col>
        <Text>{label}</Text>
        <Value>{text || 'n/a'}</Value>
    </Col>
);

export default RiderText;
