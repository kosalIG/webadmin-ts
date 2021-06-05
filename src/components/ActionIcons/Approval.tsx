import React from 'react';
import { useAppConsummer } from 'util/appContext';
import { ApproveIcon } from './globleStyled';

const Index: React.FC<{ navkey?: string; onClick: () => void }> = ({ navkey, onClick }) => {
    const { user } = useAppConsummer();
    const result = user?.permissions.find((p) => p === navkey);
    if (result) {
        return (
            <div onClick={onClick}>
                <ApproveIcon />
            </div>
        );
    }
    return null;
};

export default Index;
