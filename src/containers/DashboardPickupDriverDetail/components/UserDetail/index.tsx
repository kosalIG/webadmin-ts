import React from 'react';
import { Card } from 'antd';
import User from './User';
import PickupDetail from './PickupDetail';
import Addrress from './Address';
import { UserDetailProps } from '../../interface';

const Index: React.FC<UserDetailProps> = ({ driver, rider, orderDetail, orderDropoffs }) => {
    return (
        <Card>
            <User label="Driver name" userData={driver} />
            <User label="Rider name" userData={rider} />
            <PickupDetail orderDetail={orderDetail} />
            <Addrress orderDropoffs={orderDropoffs} orderDetail={orderDetail} />
        </Card>
    );
};

export default Index;
