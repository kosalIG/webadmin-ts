import { Card } from 'antd';
import React from 'react';
import Coupon from './ExpandCoupon';

const Expand: React.FC<{ data: any; onRefetch: (val?: any) => void }> = ({ data, onRefetch }) => {
    const { promotionCoupons } = data || {};
    return (
        <Card style={{ cursor: 'default', width: 700 }} hoverable>
            <Coupon records={promotionCoupons} onRefetch={onRefetch} />
        </Card>
    );
};

export default Expand;
