import React from 'react';
import { Delete } from 'components/ActionIcons';
import { useDelete } from '../api';
const Index: React.FC<{ id: string; onSuccess: () => void }> = ({ id, onSuccess }) => {
    const { deleteGroupUserList } = useDelete(onSuccess);
    return <Delete navkey="WEB:USER_GROUP:DELETE" onConfirm={() => deleteGroupUserList(id)} />;
};

export default Index;
