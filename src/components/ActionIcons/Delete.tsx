import React from 'react';
import { Popconfirm } from 'antd';
import { DeleteIcon } from './globleStyled';
import { useAppConsummer } from 'util/appContext';

const View: React.FC<{ title?: string; navkey?: string; onConfirm: () => void }> = ({ title, navkey, onConfirm }) => {
    const { user } = useAppConsummer();
    const result = user?.permissions.find((p) => p === navkey);

    if (result) {
        return (
            <Popconfirm
                placement="topRight"
                title={title || 'Are you sure want to delete this records?'}
                onConfirm={onConfirm}
            >
                <DeleteIcon />
            </Popconfirm>
        );
    }
    return null;
};

export default View;
