import React, { useEffect } from 'react';
import { Tooltip, Popconfirm, Button } from 'antd';
import { useDeleteAllWhitelist } from '../../api';
import { message } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

const Index: React.FC<{ id: number; onRefetch: () => void }> = ({ id, onRefetch }) => {
    const { deleteAllPromotionWhitelists, data } = useDeleteAllWhitelist();
    useEffect(() => {
        if (data) {
            message.destroy();
            onRefetch();
            message.success('Delete all successfully');
        }
    }, [data]);

    const handleDelete = () => {
        message.loading('deleting...');
        deleteAllPromotionWhitelists({ variables: { proId: id } });
    };

    return (
        <Tooltip placement="bottom" title="Delete all whitelist">
            <Popconfirm title="Are you sure want to delete all whitelist?" onConfirm={() => handleDelete()}>
                <Button icon={<DeleteFilled />} danger type="primary" size="small" />
            </Popconfirm>
        </Tooltip>
    );
};

export default Index;
