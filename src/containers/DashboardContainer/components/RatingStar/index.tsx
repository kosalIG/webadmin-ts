/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Card, Table } from 'antd';
import { StarCount, Profile } from './RatingUI';
const Index: React.FC<{ records?: any[]; loading: boolean }> = ({ records, loading }) => {
    const column = [
        {
            dataIndex: 'driver',
            render: function profile(item: any) {
                return (
                    <Profile
                        fullName={item?.fullName || 'n/a'}
                        src={item?.avatar || 'n/a'}
                        plateNumber={item?.driverInfo?.plateNumber || 'n/a'}
                    />
                );
            },
        },
        {
            dataIndex: 'countRating',
            render: function Star(item: any, rec: any) {
                return <StarCount user={item} star={rec?.rating} />;
            },
        },
    ];

    return (
        <Card
            title="Rating Star"
            type="inner"
            loading={loading}
            hoverable
            style={{ cursor: 'default', minHeight: 477 }}
        >
            <Table
                showHeader={false}
                size="small"
                // bordered
                columns={column}
                pagination={false}
                dataSource={records?.slice(0, 6).map((item, idx) => ({ ...item, key: idx + 1 }))}
                rowKey={(item: any) => item.key}
            />
        </Card>
    );
};

export default Index;
