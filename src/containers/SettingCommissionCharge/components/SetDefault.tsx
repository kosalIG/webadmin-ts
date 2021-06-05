import React from 'react';
import { Popconfirm, Checkbox } from 'antd';
import { useSetDefault } from '../api';
import { useAppConsummer } from 'util/appContext';

const Index: React.FC<{ id: string; dataObj: any; onRefetch: () => void }> = ({ id, dataObj, onRefetch }) => {
    const { onSetDefault } = useSetDefault({ callback: onRefetch });

    const { user } = useAppConsummer();
    const result = user?.permissions.find((p) => p === 'WEB:COMMISSION:SET_DEFAULT');

    if (result) {
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
    }

    return null;
};

export default Index;
