import React, { useState } from 'react';
import { Card, Tabs } from 'antd';

import { useGetReferral } from './api';
import Table from './components/Table';
import { useColumn } from './useColumn';
const { TabPane } = Tabs;

const Index: React.FC = () => {
    const [referenceType, setReferenceType] = useState('WALLET');
    const { records, metadata, loading, onTabs, onPagin } = useGetReferral();
    const { column } = useColumn(referenceType);

    function onTabsClick(e: string): void {
        setReferenceType(e);
        onTabs(e);
    }

    return (
        <Card title="Referral" type="inner">
            <Tabs onTabClick={onTabsClick}>
                <TabPane tab="Wallet" key="WALLET">
                    <Table onPagin={onPagin} metadata={metadata} loading={loading} column={column} records={records} />
                </TabPane>
                <TabPane tab="Promotion" key="PROMOTION">
                    <Table onPagin={onPagin} metadata={metadata} loading={loading} column={column} records={records} />
                </TabPane>
            </Tabs>
        </Card>
    );
};

export default Index;
