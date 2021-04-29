import React from 'react';
import { Avatar } from 'antd';
import moment from 'moment';
import { UserOutlined } from '@ant-design/icons';

interface InactiveUIProps {
    avatar: string;
    fullName: string;
    mobileNumber: string;
    inactiveAt: number;
}

const Index: React.FC<InactiveUIProps> = ({ avatar, fullName, mobileNumber, inactiveAt }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Avatar src={avatar} size={60} icon={<UserOutlined />} />
            <br />
            <strong>{fullName}</strong>
            <br />
            <small>{`(${mobileNumber})`}</small>
            <br />
            <div>{inactiveAt ? moment(new Date(inactiveAt * 1000), 'YYYYMMDD').fromNow() : '---'}</div>
        </div>
    );
};
export default Index;
