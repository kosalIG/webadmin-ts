import React from 'react';
import { Popconfirm, Checkbox } from 'antd';
import { useSetDefault } from '../api';

const Index: React.FC<{ id: string; dataObj: any; onRefetch: () => void }> = ({ id, dataObj, onRefetch }) => {
    const { onSetDefault } = useSetDefault({ callback: onRefetch });

    return (
        <Popconfirm
            disabled={dataObj?.isDefault}
            title="Are you sure set this currency to default?"
            onConfirm={() => onSetDefault(id)}
            okText="Yes"
            cancelText="No"
        >
            <Checkbox disabled={dataObj?.isDefault} checked={dataObj?.isDefault} />
        </Popconfirm>
    );
};

export default Index;
