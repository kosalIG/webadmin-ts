import React from 'react';
import { Delete } from 'components/ActionIcons';
import { useDelete } from '../api';

const Index: React.FC<{ id: string; getList: () => void }> = ({ id, getList }) => {
    const { onDelete } = useDelete({ callBack: getList });

    return <Delete navkey="WEB:COLOR:DELETE" onConfirm={() => onDelete(id)} />;
};

export default Index;
