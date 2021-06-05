import React from 'react';
import { useAppConsummer } from 'util/appContext';
import { TopupIcon } from './globleStyled';

const TopUp: React.FC<{ navkey?: string; onClick: () => void }> = ({ navkey, onClick }) => {
    const { user } = useAppConsummer();
    const result = user?.permissions.find((p) => p === navkey);

    if (result) {
        return (
            <div onClick={onClick}>
                <TopupIcon />
            </div>
        );
    }

    return null;
};

export default TopUp;
