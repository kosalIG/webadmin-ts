import React from 'react';
import { RejectIcon } from './globleStyled';

const Index: React.FC<{ navkey?: string; onClick?: () => void }> = ({ onClick }) => {
    return (
        <div onClick={onClick}>
            <RejectIcon />
        </div>
    );
};

export default Index;
