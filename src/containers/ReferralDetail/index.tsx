import React, { useState } from 'react';
import { Card, Tabs } from 'antd';
import { useLocation, useParams } from 'react-router-dom';
import Currency from 'components/Currency';
import UserProfile from './components/UserProfile';
import Table from './components/Table';
import useGetUserReferral from './api';
import { useColumn } from './useColumn';
import Breadcrumbs from 'components/Breadcrumbs';

const { TabPane } = Tabs;
const Index: React.FC = () => {
    const { state } = useLocation<any>();
    const { type } = useParams<any>();
    const objType = {
        WALLET: 'PENDING',
        PROMOTION: 'APPROVED',
    };
    const [status, setStatus] = useState(objType[type]);
    const { records, loading, totalAmount } = useGetUserReferral(status);
    const { column } = useColumn(type);

    return (
        <Card title="Referral Detail" type="inner">
            <Breadcrumbs propRoutes={['WEB:REFERRAL:READ', 'WEB:REFERRAL:READ_DETAIL']} />
            <UserProfile user={state} />
            <Tabs onTabClick={(e) => setStatus(e)} defaultActiveKey="PENDING">
                {type === 'WALLET' && (
                    <TabPane tab="Pending" key="PENDING">
                        <Table
                            titleValue={<Currency type="KHR" value={totalAmount || 0} />}
                            title="Total Amount"
                            loading={loading}
                            column={column}
                            records={records}
                        />
                    </TabPane>
                )}
                <TabPane tab="Approved" key="APPROVED">
                    <Table
                        titleValue={records?.length}
                        title="Total Promotion"
                        loading={loading}
                        column={column}
                        records={records}
                    />
                </TabPane>
            </Tabs>
        </Card>
    );
};

export default Index;
