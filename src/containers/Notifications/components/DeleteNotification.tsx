import React from 'react';
import { Delete } from 'components/ActionIcons';
import { DeleteOutlined } from '@ant-design/icons';
import { useDeleteNotification } from '../api';

const PushNotification: React.FC<{ status?: string; id: string; onRefetch: (param?: any) => void }> = ({
    status,
    id,
    onRefetch,
}) => {
    const { onDeleteNotification } = useDeleteNotification({ onRefetch });
    return (
        <div>
            {status === 'SENT' ? (
                <span style={{ cursor: 'not-allowed', color: 'gray' }}>
                    <DeleteOutlined />
                </span>
            ) : (
                <Delete onConfirm={() => onDeleteNotification(id)} />
            )}
        </div>
    );
};

export default PushNotification;
