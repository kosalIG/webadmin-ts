import React from 'react';
import { EditIcon } from './globleStyled';
import { useAppConsummer } from 'util/appContext';

const Index: React.FC<{ navkey?: string; onClick: () => void }> = ({ navkey, onClick }) => {
    const { user } = useAppConsummer();
    const result = user?.permissions.find((p) => p === navkey);
    if (result) {
        return (
            <div onClick={onClick}>
                <EditIcon />
            </div>
        );
    }

    return null;
};

export default Index;
