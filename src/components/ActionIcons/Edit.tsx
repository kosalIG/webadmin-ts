import React from 'react';
import { EditIcon } from './globleStyled';

const TopUp: React.FC<{ navkey?: string; onClick?: () => void }> = ({ onClick }) => {
    return (
        <div onClick={onClick}>
            <EditIcon />
        </div>
    );
};

export default TopUp;
