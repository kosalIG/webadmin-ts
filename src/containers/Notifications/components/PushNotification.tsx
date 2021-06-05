import React from 'react';
import { Push } from 'components/ActionIcons';
import { CheckCircleOutlined } from '@ant-design/icons';
import { usePushNotification } from '../api';

const PushNotification: React.FC<{ status?: string; id: string; onRefetch: (param?: any) => void }> = ({
    status,
    id,
    onRefetch,
}) => {
    const { onPushNotification } = usePushNotification({ onRefetch });
    return (
        <div>
            {status === 'SENT' ? (
                <span style={{ cursor: 'not-allowed', color: 'gray' }}>
                    <CheckCircleOutlined />
                </span>
            ) : (
                <Push navkey="WEB:NOTIFICATION:PUSH_NOTIFICATION" onConfirm={() => onPushNotification(id)} />
            )}
        </div>
    );
};

export default PushNotification;
