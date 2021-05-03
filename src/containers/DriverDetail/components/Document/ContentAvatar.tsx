import React from 'react';
import { Avatar } from 'antd';
import { TextBold } from './styled';
import { s3Url } from 'env';

interface DocAvatarProps {
    text: string;
    icon: React.ReactNode;
    src: string;
}
const DocAvatar: React.FC<DocAvatarProps> = ({ text, icon, src }) => {
    return (
        <div>
            <TextBold>{text}</TextBold>
            <Avatar
                style={{ minWidth: 300, minHeight: 170 }}
                shape="square"
                src={src ? s3Url + src : ''}
                icon={<div style={{ fontSize: 170 }}>{icon}</div>}
            />
        </div>
    );
};

export default DocAvatar;
