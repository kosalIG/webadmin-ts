import React from 'react';
import { Tag } from 'antd';
export type StatusProps = 'ACTIVE' | 'INACTIVE' | 'DELETED';

const Index: React.FC<{ status: StatusProps }> = ({ status }) => {
    const st = {
        ACTIVE: ['Active', 'green'],
        INACTIVE: ['Inactive', 'warning'],
        DELETED: ['Deleted', 'red'],
    };
    return <Tag color={st[status][1]}>{st[status][0]}</Tag>;
};

export default Index;
