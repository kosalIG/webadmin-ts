import React from 'react';
import { Popconfirm } from 'antd';
import { PushIcon } from './globleStyled';
import { useAppConsummer } from 'util/appContext';

const Index: React.FC<{ title?: string; navkey?: string; onConfirm: () => void }> = ({ navkey, title, onConfirm }) => {
    const { user } = useAppConsummer();
    const result = user?.permissions.find((p) => p === navkey);

    if (result) {
        return (
            <Popconfirm
                placement="topRight"
                title={title || 'Are you sure want to sent notification?'}
                onConfirm={onConfirm}
            >
                <PushIcon />
            </Popconfirm>
        );
    }

    return null;
};

export default Index;
