import React from 'react';
import { Tag } from 'antd';
type Value = 1 | 0;
const Index: React.FC<{ value: Value }> = ({ value }) => {
    const vColor = { 1: 'blue', 0: 'orange' };
    const vText = { 1: 'Verified', 0: 'Pending' };

    return <Tag color={vColor[value]}>{vText[value]}</Tag>;
};

export default Index;
