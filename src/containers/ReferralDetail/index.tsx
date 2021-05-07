import React from 'react';
import { Card, Tabs } from 'antd';
import { useLocation, useParams } from 'react-router-dom';
import Currency from 'components/Currency';
import UserProfile from './components/UserProfile';
import Table from './components/Table';
import useGetUserReferral from './api';
import { useColumn } from './useColumn';

const { TabPane } = Tabs;
const Index: React.FC = () => {
    const { state } = useLocation<any>();
    const { type } = useParams<any>();
    const { records, loading, totalAmount } = useGetUserReferral();
    const { column } = useColumn(type);

    return (
        <Card title="Referral Detail" type="inner">
            <UserProfile user={state} />
            <Tabs defaultActiveKey="PENDING">
                {type === 'WALLET' && (
                    <TabPane tab="Pending" key="PENDING">
                        <Table
                            titleValue={<Currency type="KHR" value={totalAmount} />}
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
