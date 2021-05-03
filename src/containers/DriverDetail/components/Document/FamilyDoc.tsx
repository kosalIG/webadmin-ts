import React from 'react';
import { Row, Col } from 'antd';
import { IdcardOutlined, SolutionOutlined } from '@ant-design/icons';

import { Text } from './styled';
import Avatar from './FamilyDocAvatar';

const FamilyDoc: React.FC = () => {
    return (
        <div>
            <Text>Personal Document</Text>
            <Row gutter={[12, 12]}>
                <Col lg={12} md={24} sm={12} xs={23}>
                    <Avatar text="Family Book" icon={<SolutionOutlined />} />
                </Col>
                <Col lg={12} md={24} sm={12} xs={23}>
                    <Avatar text="Photo 4x6" icon={<IdcardOutlined />} />
                </Col>
            </Row>
        </div>
    );
};

export default FamilyDoc;
