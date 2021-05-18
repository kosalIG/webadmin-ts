import { Card, Tabs } from 'antd';
import React from 'react';
import Coupon from './ExpandCoupon';
import Whitelist from './ExpandWhitelist';

const { TabPane } = Tabs;

const Expand: React.FC<{ data: any; onRefetch: (val?: any) => void }> = ({ data, onRefetch }) => {
    const { promotionCoupons, promotionWhitelists, id } = data || {};
    return (
        <Card style={{ cursor: 'default', width: 700 }} hoverable>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Coupon" key="1">
                    <Coupon records={promotionCoupons} onRefetch={onRefetch} />
                </TabPane>
                <TabPane tab="User whitelist" key="2">
                    <Whitelist id={id} onRefetch={onRefetch} records={promotionWhitelists} />
                </TabPane>
            </Tabs>
        </Card>
    );
};

export default Expand;
