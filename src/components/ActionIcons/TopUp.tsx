import React from 'react';
import { TopupIcon } from './globleStyled';

const TopUp: React.FC<{ navkey?: string; onClick?: () => void }> = ({ onClick }) => {
    return (
        <div onClick={onClick}>
            <TopupIcon />
        </div>
    );
};

export default TopUp;
