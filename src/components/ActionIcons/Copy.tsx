import React from 'react';
import { CopyIcon } from './globleStyled';

const Index: React.FC<{ navkey?: string; onClick?: () => void }> = ({ onClick }) => {
    return (
        <div onClick={onClick}>
            <CopyIcon />
        </div>
    );
};

export default Index;
