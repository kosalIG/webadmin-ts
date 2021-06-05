import React from 'react';
import { Delete } from 'components/ActionIcons';
import { useDelete } from '../api';

const Index: React.FC<{ id: string; onRefetch: () => void }> = ({ id, onRefetch }) => {
    const { handleDelete } = useDelete({ callback: onRefetch });

    return <Delete navkey="WEB:PAYMENT:DELETE" onConfirm={() => handleDelete(id)} />;
};

export default Index;
