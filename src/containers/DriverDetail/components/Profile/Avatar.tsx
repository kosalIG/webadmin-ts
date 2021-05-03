import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Index: React.FC<{ avatar }> = ({ avatar }) => {
    return (
        <div>
            <Avatar shape="square" src={avatar} style={{ width: `100%` }} size={260} icon={<UserOutlined />} />
        </div>
    );
};

export default Index;
