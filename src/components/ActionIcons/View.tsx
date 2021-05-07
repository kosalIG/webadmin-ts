import React from 'react';
import { Link } from 'react-router-dom';
import { ViewIcon } from './globleStyled';

const View: React.FC<{ to: string | any; navkey?: string }> = ({ to }) => {
    return (
        <Link to={to}>
            <ViewIcon />
        </Link>
    );
};

export default View;
