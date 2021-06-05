import React from 'react';
import { Link } from 'react-router-dom';
import { useAppConsummer } from 'util/appContext';
import { ViewIcon } from './globleStyled';

const View: React.FC<{ to: string | any; navkey?: string }> = ({ to, navkey }) => {
    const { user } = useAppConsummer();
    const result = user?.permissions.find((p) => p === navkey);

    if (result) {
        return (
            <Link to={to}>
                <ViewIcon />
            </Link>
        );
    }

    return null;
};

export default View;
