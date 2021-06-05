import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import UploadImage from 'util/useUpload';
import { useAppConsummer } from 'util/appContext';
const Index: React.FC<{ avatar?: string; onUpload: (file: string) => void }> = ({ avatar, onUpload }) => {
    const { user } = useAppConsummer();
    const isUpdate = user?.permissions.find((p) => p === 'WEB:DRIVER:UPDATE');

    if (isUpdate) {
        return (
            <div>
                <UploadImage width={290} onUploadSuccess={onUpload}>
                    <Avatar shape="square" src={avatar} style={{ width: `100%` }} size={260} icon={<UserOutlined />} />
                </UploadImage>
            </div>
        );
    }

    return (
        <div>
            <Avatar shape="square" src={avatar} style={{ width: `100%` }} size={260} icon={<UserOutlined />} />
        </div>
    );
};

export default Index;
