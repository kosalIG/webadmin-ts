import React from 'react';
import { Avatar } from 'antd';
import { TextBold } from './styled';

interface FamilyDocAvatarProps {
    text: string;
    icon: React.ReactNode;
}
const FamilyDocAvatar: React.FC<FamilyDocAvatarProps> = ({ text, icon }) => {
    return (
        <div>
            <TextBold>{text}</TextBold>
            <Avatar shape="square" size={170} icon={icon} />
        </div>
    );
};

export default FamilyDocAvatar;
