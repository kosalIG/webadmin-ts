import React, { useEffect } from 'react';
import { Push } from 'components/ActionIcons';
import { usePushNotification } from '../api';
import { message } from 'antd';

const Index: React.FC<{ id: any }> = ({ id }) => {
    const { pushNotificationOfPromotion, data } = usePushNotification();

    useEffect(() => {
        if (data) {
            message.destroy();
            message.success('Push notification successfully');
        }
    }, [data]);

    const handlePush = () => {
        message.loading('sending...');
        pushNotificationOfPromotion({ variables: { id } });
    };

    return <Push navkey="WEB:PROMOTION:PUSH_NOTIFICATION" onConfirm={() => handlePush()} />;
};

export default Index;
