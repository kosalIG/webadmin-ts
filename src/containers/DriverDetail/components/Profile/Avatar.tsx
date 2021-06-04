import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import UploadImage from 'util/useUpload';
const Index: React.FC<{ avatar?: string; onUpload: (file: string) => void }> = ({ avatar, onUpload }) => {
    return (
        <div>
            <UploadImage width={290} onUploadSuccess={onUpload}>
                <Avatar shape="square" src={avatar} style={{ width: `100%` }} size={260} icon={<UserOutlined />} />
            </UploadImage>
        </div>
    );
};

export default Index;
