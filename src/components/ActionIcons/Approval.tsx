import React from 'react';
import { ApproveIcon } from './globleStyled';

const Index: React.FC<{ navkey?: string; onClick?: () => void }> = ({ onClick }) => {
    return (
        <div onClick={onClick}>
            <ApproveIcon />
        </div>
    );
};

export default Index;
