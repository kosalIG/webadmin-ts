import React from 'react';
import { Delete } from 'components/ActionIcons';
import { useDelete } from '../../api';
const Index: React.FC<{ id: string; onSuccess: () => void }> = ({ id, onSuccess }) => {
    const { deleteGroup } = useDelete(onSuccess);
    return <Delete navkey="WEB:GROUP:DELETE" onConfirm={() => deleteGroup(id)} />;
};

export default Index;
