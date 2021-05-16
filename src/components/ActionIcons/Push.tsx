import React from 'react';
import { Popconfirm } from 'antd';
import { PushIcon } from './globleStyled';

const Index: React.FC<{ title?: string; navkey?: string; onConfirm?: () => void }> = ({ title, onConfirm }) => {
    return (
        <Popconfirm
            placement="topRight"
            title={title || 'Are you sure want to sent notification?'}
            onConfirm={onConfirm}
        >
            <PushIcon />
        </Popconfirm>
    );
};

export default Index;
