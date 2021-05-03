import React from 'react';
import { Row, Col } from 'antd';
import { IdcardOutlined } from '@ant-design/icons';

import { Text } from './styled';
import Avatar from './ContentAvatar';

interface ContentProps {
    title: string;
    backSrc: string;
    frontSrc: string;
}
const Index: React.FC<ContentProps> = ({ title, frontSrc, backSrc }) => {
    return (
        <div style={{ marginTop: 20 }}>
            <Text>{title}</Text>
            <Row gutter={[36, 12]}>
                <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                    <Avatar src={frontSrc} text="Front Side" icon={<IdcardOutlined />} />
                </Col>
                <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                    <Avatar src={backSrc} text="Back Side" icon={<IdcardOutlined />} />
                </Col>
            </Row>
        </div>
    );
};

export default Index;
