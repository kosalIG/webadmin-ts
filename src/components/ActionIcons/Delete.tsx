import React from 'react';
import { Popconfirm } from 'antd';
import { DeleteIcon } from './globleStyled';

const View: React.FC<{ title?: string; navkey?: string; onConfirm?: () => void }> = ({ title, onConfirm }) => {
    return (
        <Popconfirm
            placement="topRight"
            title={title || 'Are you sure want to delete this records?'}
            onConfirm={onConfirm}
        >
            <DeleteIcon />
        </Popconfirm>
    );
};

export default View;
