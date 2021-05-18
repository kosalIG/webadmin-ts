import React, { useEffect } from 'react';
import { Delete } from 'components/ActionIcons';
import { useDeleteWhitelist } from '../../api';
import { message } from 'antd';

const Index: React.FC<{ id: string; onRefetch: () => void }> = ({ id, onRefetch }) => {
    const { deletePromotionWhitelist, data } = useDeleteWhitelist();
    useEffect(() => {
        if (data) {
            message.destroy();
            onRefetch();
            message.success('Delete successfully');
        }
    }, [data]);

    const handleDelete = () => {
        message.loading('deleting...');
        deletePromotionWhitelist({ variables: { id } });
    };
    return <Delete onConfirm={() => handleDelete()} />;
};

export default Index;
