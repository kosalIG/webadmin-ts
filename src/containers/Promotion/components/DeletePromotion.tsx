import React, { useEffect } from 'react';
import { Delete } from 'components/ActionIcons';
import { useDelete } from '../api';
import { message } from 'antd';

const Index: React.FC<{ id: string; onRefetch: () => void }> = ({ id, onRefetch }) => {
    const { deletePromotion, data } = useDelete();
    useEffect(() => {
        if (data) {
            message.destroy();
            onRefetch();
            message.success('Delete successfully');
        }
    }, [data]);

    const handleDelete = () => {
        message.loading('deleting...');
        deletePromotion({ variables: { id } });
    };
    return <Delete navkey="WEB:PROMOTION:DELETE" onConfirm={() => handleDelete()} />;
};

export default Index;
