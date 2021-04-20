import React from 'react';
import { Avatar, Typography } from 'antd';
import Ratings from 'react-ratings-declarative';

import { UserOutlined, TeamOutlined } from '@ant-design/icons';
const { Text } = Typography;

export const Profile: React.FC<{ fullName: string; plateNumber: string; src: string }> = ({
    src,
    fullName,
    plateNumber,
}) => {
    return (
        <div style={{ display: 'flex' }}>
            <Avatar style={{ marginRight: 10 }} size="large" src={src} icon={<UserOutlined />} />
            <div>
                <div>{fullName}</div>
                <Text type="secondary" style={{ fontSize: 11 }}>
                    ({plateNumber} )
                </Text>
            </div>
        </div>
    );
};

export const StarCount: React.FC<{ star?: number; user: number }> = ({ star, user }) => {
    return (
        <div style={{ textAlign: 'right' }}>
            <div>
                <Ratings rating={star || 0} widgetDimensions="17px" widgetSpacings="1px" widgetRatedColors="#fadb14">
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                </Ratings>
            </div>
            <Text>
                <TeamOutlined /> {user || 0} total(s)
            </Text>
        </div>
    );
};
