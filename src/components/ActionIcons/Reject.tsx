import React from 'react';
import { useAppConsummer } from 'util/appContext';
import { RejectIcon } from './globleStyled';

const Index: React.FC<{ navkey?: string; onClick: () => void }> = ({ navkey, onClick }) => {
    const { user } = useAppConsummer();
    const result = user?.permissions.find((p) => p === navkey);

    if (result) {
        return (
            <div onClick={onClick}>
                <RejectIcon />
            </div>
        );
    }
    return null;
};

export default Index;
